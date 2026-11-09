import React, { cloneElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import classNames from "classnames";
import { BiX } from "react-icons/bi";
import { NativeResizeObserver } from "../../utils/nativeResizeObserver";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { FocusOn } from "react-focus-on";
import { VuiItemsInput, VuiNumberInput, VuiTextInput } from "../form";
import { VuiTooltip, Props as VuiTooltipProps } from "../tooltip/Tooltip";

export type AnchorSide =
  | "left"
  | "right"
  | "center"
  | "rightUp"
  | "rightDown"
  | "leftUp"
  | "leftDown"
  | "upLeft"
  | "upRight";

export type Props = {
  button: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickButton?: (e: React.MouseEvent<HTMLElement>) => void;
  padding?: boolean | "none";
  anchorSide?: AnchorSide;
  anchorOffsetX?: number;
  anchorOffsetY?: number;
  tooltip?: string;
  tooltipProps?: Omit<VuiTooltipProps, "children" | "tip">;
};

type Position = {
  top: string;
  left: string;
};

type Size = {
  width: number;
  height: number;
};

type Placement = {
  // The side of the button the popover is placed against.
  side: "below" | "above" | "right" | "left";
  // How the popover lines up with the button along that side: "start" aligns their
  // left or top edges, and "end" aligns their right or bottom edges.
  alignment: "start" | "center" | "end";
};

const ANCHOR_SIDE_TO_PLACEMENT: Record<AnchorSide, Placement> = {
  left: { side: "below", alignment: "start" },
  right: { side: "below", alignment: "end" },
  center: { side: "below", alignment: "center" },
  upLeft: { side: "above", alignment: "start" },
  upRight: { side: "above", alignment: "end" },
  rightDown: { side: "right", alignment: "start" },
  rightUp: { side: "right", alignment: "end" },
  leftDown: { side: "left", alignment: "start" },
  leftUp: { side: "left", alignment: "end" }
};

// Phone-sized screens are too narrow to anchor a popover to its button,
// so it fills the screen like a modal instead.
const FULL_SCREEN_MEDIA_QUERY = "(max-width: 480px)";

// Minimum gap between the popover and the edges of the viewport. The popover's
// max-width in CSS accounts for this gap on both sides.
const VIEWPORT_MARGIN = 8;

// Returns how far a popover of the given size extends beyond the viewport along one axis.
const getOverflow = (start: number, size: number, viewportSize: number) =>
  Math.max(VIEWPORT_MARGIN - start, start + size + VIEWPORT_MARGIN - viewportSize, 0);

// Shifts the popover along one axis to keep it inside the viewport. A popover
// that's larger than the viewport stays pinned to the top or left edge.
const clampToViewport = (start: number, size: number, viewportSize: number) =>
  Math.max(VIEWPORT_MARGIN, Math.min(start, viewportSize - VIEWPORT_MARGIN - size));

// Flips the popover to the opposite side of the button if it fits better there.
const flipToFit = (preferredStart: number, flippedStart: number, size: number, viewportSize: number) => {
  const isFlippedBetter =
    getOverflow(flippedStart, size, viewportSize) < getOverflow(preferredStart, size, viewportSize);
  return clampToViewport(isFlippedBetter ? flippedStart : preferredStart, size, viewportSize);
};

const calculatePopoverPosition = (
  button: HTMLElement | null,
  popoverSize: Size,
  anchorOptions: { anchorSide: AnchorSide; offsetX: number; offsetY: number }
): Position | undefined => {
  if (!button) return undefined;

  const { anchorSide, offsetX = 0, offsetY = 0 } = anchorOptions;
  const { side, alignment } = ANCHOR_SIDE_TO_PLACEMENT[anchorSide];
  const buttonRect = button.getBoundingClientRect();
  const { clientWidth: viewportWidth, clientHeight: viewportHeight } = document.documentElement;

  let top: number;
  let left: number;

  if (side === "below" || side === "above") {
    const below = buttonRect.bottom + offsetY;
    const above = buttonRect.top - offsetY - popoverSize.height;
    top =
      side === "below"
        ? flipToFit(below, above, popoverSize.height, viewportHeight)
        : flipToFit(above, below, popoverSize.height, viewportHeight);

    const alignedLeft = {
      start: buttonRect.left,
      center: buttonRect.left + (buttonRect.width - popoverSize.width) / 2,
      end: buttonRect.right - popoverSize.width
    }[alignment];
    left = clampToViewport(alignedLeft, popoverSize.width, viewportWidth);
  } else {
    const rightOfButton = buttonRect.right + offsetX;
    const leftOfButton = buttonRect.left - offsetX - popoverSize.width;
    left =
      side === "right"
        ? flipToFit(rightOfButton, leftOfButton, popoverSize.width, viewportWidth)
        : flipToFit(leftOfButton, rightOfButton, popoverSize.width, viewportWidth);

    // Extend downwards from the top of the button, or upwards from the bottom of it.
    const alignedTop = alignment === "start" ? buttonRect.top - offsetY : buttonRect.bottom - popoverSize.height;
    top = clampToViewport(alignedTop, popoverSize.height, viewportHeight);
  }

  // The popover is positioned relative to the document, not the viewport.
  return { top: `${top + window.scrollY}px`, left: `${left + window.scrollX}px` };
};

export const VuiPopover = ({
  button: originalButton,
  children,
  className,
  header,
  isOpen,
  setIsOpen,
  padding,
  anchorSide = "right",
  anchorOffsetX = 2,
  anchorOffsetY = 2,
  onClickButton,
  tooltip,
  tooltipProps,
  ...rest
}: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLElement | null>(null);
  const [popover, setPopover] = useState<HTMLDivElement | null>(null);
  const [popoverSize, setPopoverSize] = useState<Size>({ width: 0, height: 0 });
  const [, setPositionMarker] = useState<number>(0);
  const isFullScreen = useMediaQuery(FULL_SCREEN_MEDIA_QUERY);
  const [showTransition, setShowTransition] = useState(false);
  // Uncouple open state from visibile state so that when the popover is closed,
  // we can set the button to be unselected immediately while the popover content
  // is still transitioning out.
  const [isContentVisible, setIsContentVisible] = useState(false);

  const buttonProps: any = {
    ref: (node: HTMLElement) => {
      buttonRef.current = node;
    }
  };

  const isButtonAnInput = Boolean(
    [VuiTextInput, VuiNumberInput, VuiItemsInput].find((type) => type === originalButton.type)
  );

  if (isButtonAnInput) {
    buttonProps.onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if (
        e.code !== "Tab" &&
        e.code !== "Escape" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.repeat
      ) {
        setIsOpen(true);
        e.preventDefault();
      }
    };
    buttonProps.onClick = (e: React.MouseEvent<HTMLElement>) => {
      onClickButton?.(e);
      setIsOpen(!isOpen);
    };
  } else {
    // Assume it's a VUI button component of some sort.
    buttonProps.isSelected = isOpen;
    buttonProps.onClick = (e: React.MouseEvent<HTMLElement>) => {
      onClickButton?.(e);
      setIsOpen(!isOpen);
    };
  }

  const clonedButton = cloneElement(originalButton, buttonProps);

  const button =
    tooltip !== undefined ? (
      <VuiTooltip tip={tooltip} {...tooltipProps}>
        {clonedButton}
      </VuiTooltip>
    ) : (
      clonedButton
    );

  useEffect(() => {
    const updatePosition = () => {
      // Force a re-render when the window resizes.
      setPositionMarker(Date.now());
    };

    window.addEventListener("resize", updatePosition);
    // Mostly defensive to prevent weird bugs where the popover ends
    // up being rendered partially off-screen.
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  // Track the popover's size so it can be kept inside the viewport. Measuring
  // before paint prevents it from flickering in a position that's offscreen.
  useLayoutEffect(() => {
    if (!popover) return;

    const measure = () => {
      // Offset dimensions ignore the transform applied by the transition.
      const { offsetWidth: width, offsetHeight: height } = popover;
      setPopoverSize((prev) => (prev.width === width && prev.height === height ? prev : { width, height }));
    };

    // The content can resize without the popover re-rendering.
    const resizeObserver = new NativeResizeObserver(() => flushSync(measure));
    resizeObserver.observe(popover);
    measure();

    return () => resizeObserver.disconnect();
  }, [popover]);

  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setIsContentVisible(true);
      requestAnimationFrame(() => {
        setShowTransition(true);
      });
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
      setShowTransition(false);

      // Wait for the transition to complete before unmounting.
      // This duration should match the CSS transition speed.
      window.setTimeout(() => {
        setIsContentVisible(false);
      }, 200);
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting, and also
  // enable focus to properly return to the button when the user clicks
  // outside of the popover.
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  // Always keep menu position up to date. If we tried to cache this inside
  // a useEffect based on isOpen then there'd be a flicker if the width
  // of the button changes.
  const position = calculatePopoverPosition(buttonRef.current, popoverSize, {
    anchorSide,
    offsetX: anchorOffsetX,
    offsetY: anchorOffsetY
  });

  const classes = classNames("vuiPopover", className, {
    "vuiPopover-isLoaded": showTransition,
    "vuiPopover--fullScreen": isFullScreen,
    "vuiPopover--rightUp": anchorSide === "rightUp",
    "vuiPopover--leftUp": anchorSide === "leftUp",
    "vuiPopover--upLeft": anchorSide === "upLeft",
    "vuiPopover--upRight": anchorSide === "upRight"
  });

  const title = header && typeof header === "string" ? <div className="vuiPopoverTitle">{header}</div> : header;

  const contentClasses = classNames("vuiPopoverContent", {
    "vuiPopoverContent--padding": padding === true,
    "vuiPopoverContent--paddingNone": padding === "none"
  });

  return (
    <>
      {button}

      <VuiPortal>
        {(isOpen || isContentVisible || showTransition) && position && (
          <FocusOn
            // Disable the focus guard as soon as the popover begins closing
            // so it doesn't intercept clicks while transitioning out.
            enabled={isOpen}
            onEscapeKey={onCloseDelayed}
            onClickOutside={onCloseDelayed}
            // Enable manual focus return to work.
            returnFocus={false}
            // Enable focus on contents when it's open,
            // but enable manual focus return to work when it's closed.
            autoFocus={isOpen}
            // Enable scrolling of the page, unless the popover covers it.
            scrollLock={isFullScreen}
            // Enable scrolling of the page.
            preventScrollOnFocus={false}
          >
            <div ref={setPopover} className={classes} style={isFullScreen ? undefined : position} {...rest}>
              {isFullScreen ? (
                // There's nowhere outside of a full-screen popover to click, so provide a way to close it.
                <div className="vuiPopoverFullScreenHeader">
                  <div className="vuiPopoverFullScreenHeader__title">{title}</div>
                  <VuiIconButton
                    aria-label="Close"
                    onClick={onCloseDelayed}
                    color="neutral"
                    icon={
                      <VuiIcon size="m" color="neutral">
                        <BiX />
                      </VuiIcon>
                    }
                  />
                </div>
              ) : (
                title
              )}
              {children && <div className={contentClasses}>{children}</div>}
            </div>
          </FocusOn>
        )}
      </VuiPortal>
    </>
  );
};
