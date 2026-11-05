import { RefObject, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { NativeResizeObserver } from "./nativeResizeObserver";

// Tolerates subpixel rounding.
const OVERFLOW_TOLERANCE = 1;

// Decides when a component should collapse into a more compact layout. A component's own box
// can't reveal whether it fits, because in a flex row the overflow appears on an ancestor
// instead, as overlapped or displaced neighbors. So this compares every ancestor's overflow
// with the component's content laid out in place against the overflow without it, which also
// ignores overflow caused by unrelated content. These layouts are forced and reverted
// synchronously, so they never paint, and they're independent of which layout is showing, so
// swapping can't feed back into the result.
//
// The component's styles define `${blockClass}--measureEmpty` and `${blockClass}--measureFit`
// to apply these layouts.
export const useCollapseOnOverflow = (
  rootRef: RefObject<HTMLElement>,
  blockClass: string,
  isEnabled: boolean,
  measureKey: string
) => {
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

    const measureEmptyClass = `${blockClass}--measureEmpty`;
    const measureFitClass = `${blockClass}--measureFit`;

    const measure = () => {
      // Pin the height so scrollable ancestors don't clamp their scroll position.
      root.style.minHeight = `${root.offsetHeight}px`;

      root.classList.add(measureEmptyClass);
      const overflowsWhenEmpty = getOverflows();

      root.classList.replace(measureEmptyClass, measureFitClass);
      const overflowsWithContent = getOverflows();

      root.classList.remove(measureFitClass);
      root.style.minHeight = "";

      setIsCollapsed(
        overflowsWithContent.some((overflow, index) => overflow > overflowsWhenEmpty[index] + OVERFLOW_TOLERANCE)
      );
    };

    // Measure in the next frame, because swapping layouts inside the observer's callback can
    // trigger "ResizeObserver loop" errors. The space reserved while measuring means the
    // component collapses before it touches its neighbors, so this frame's delay isn't visible.
    let frameId: number;
    const resizeObserver = new NativeResizeObserver(() => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => flushSync(measure));
    });

    // The available space changes with the ancestors' sizes and with their other children,
    // such as a neighboring component collapsing.
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
  }, [rootRef, blockClass, isEnabled, measureKey]);

  return isCollapsed;
};
