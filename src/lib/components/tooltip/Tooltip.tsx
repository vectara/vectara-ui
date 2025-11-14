import { useState, cloneElement } from "react";
import { Tooltip, TooltipRefProps } from "react-tooltip";
import { useVuiContext } from "../context/Context";

export type Props = {
  children: React.ReactNode;
  tip: React.ReactNode;
  darkTheme?: boolean;
  position?: TooltipRefProps["place"];
};

const generateTooltipId = () => {
  return `tooltip-${Math.random().toString(36).slice(2, 9)}`;
};

export const VuiTooltip = ({ children, darkTheme, position, tip }: Props) => {
  const { getThemeStyle } = useVuiContext();
  const [id] = useState(generateTooltipId());

  const target = cloneElement(children as React.ReactElement, {
    "data-tooltip-id": id
  });

  // Tooltips can be used in a dark-themed component, so we need to explicitly set
  // the light theme class in order to enable having a different theme than the
  // parent.
  const style = getThemeStyle(darkTheme ? "dark" : "light");

  return (
    <>
      {target}
      <Tooltip id={id} offset={10} className="vuiTooltip" style={style} opacity={1} place={position}>
        {tip}
      </Tooltip>
    </>
  );
};

// This is a workaround for the issue with ResizeObserver in ReactTooltip.
// Without this, uncaught runtime errors are thrown: "ResizeObserver loop
// completed with undelivered notifications."
// See https://github.com/ReactTooltip/react-tooltip/issues/1104
const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let tid: any;
  return function (...args: any[]) {
    // eslint-disable-next-line no-restricted-globals
    const ctx = self;
    tid && clearTimeout(tid);
    tid = setTimeout(() => {
      callback.apply(ctx, args);
    }, delay);
  };
};

const _ = (window as any).ResizeObserver;
(window as any).ResizeObserver = class ResizeObserver extends _ {
  constructor(callback: (...args: any[]) => void) {
    callback = debounce(callback, 20);
    super(callback);
  }
};
