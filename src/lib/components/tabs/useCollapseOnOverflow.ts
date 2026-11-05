import { RefObject, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { NativeResizeObserver } from "../../utils/nativeResizeObserver";

const MEASURE_EMPTY_CLASS = "vuiTabs--measureEmpty";
const MEASURE_FIT_CLASS = "vuiTabs--measureFit";

// Tolerates subpixel rounding.
const OVERFLOW_TOLERANCE = 1;

// Tabs size to their content, so their own box can't reveal whether they fit. In a flex row
// the overflow appears on an ancestor instead, as overlapped or displaced neighbors. So this
// compares every ancestor's overflow with the tabs laid out in place against the overflow
// without them, which also ignores overflow caused by unrelated content. These layouts are
// forced and reverted synchronously, so they never paint, and they're independent of which
// layout is showing, so swapping can't feed back into the result.
export const useCollapseOnOverflow = (rootRef: RefObject<HTMLElement>, isEnabled: boolean, measureKey: string) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!isEnabled || !root) {
      setIsCollapsed(false);
      return;
    }

    const ancestors: HTMLElement[] = [];
    for (let element: HTMLElement | null = root; element; element = element.parentElement) {
      ancestors.push(element);
    }

    // scrollWidth misses overflow past the start edge, e.g. in a right-aligned flex row.
    const getOverflows = () =>
      ancestors.map((element) => {
        const { left } = element.getBoundingClientRect();
        const childLefts = Array.from(element.children, (child) => child.getBoundingClientRect().left);
        return element.scrollWidth - element.clientWidth + Math.max(0, left - Math.min(left, ...childLefts));
      });

    const measure = () => {
      // Pin the height so scrollable ancestors don't clamp their scroll position.
      root.style.minHeight = `${root.offsetHeight}px`;

      root.classList.add(MEASURE_EMPTY_CLASS);
      const overflowsWithoutTabs = getOverflows();

      root.classList.replace(MEASURE_EMPTY_CLASS, MEASURE_FIT_CLASS);
      const overflowsWithTabs = getOverflows();

      root.classList.remove(MEASURE_FIT_CLASS);
      root.style.minHeight = "";

      setIsCollapsed(
        overflowsWithTabs.some((overflow, index) => overflow > overflowsWithoutTabs[index] + OVERFLOW_TOLERANCE)
      );
    };

    // Measure in the next frame, because swapping layouts inside the observer's callback can
    // trigger "ResizeObserver loop" errors. The space reserved while measuring means the
    // tabs collapse before they touch their neighbors, so this frame's delay isn't visible.
    let frameId: number;
    const resizeObserver = new NativeResizeObserver(() => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => flushSync(measure));
    });

    // The available space changes with the ancestors' sizes and with their other children,
    // such as a neighboring VuiTabs collapsing.
    ancestors.forEach((ancestor) => {
      resizeObserver.observe(ancestor);
      Array.from(ancestor.children).forEach((child) => resizeObserver.observe(child));
    });

    document.fonts?.ready.then(measure);
    measure();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [rootRef, isEnabled, measureKey]);

  return isCollapsed;
};
