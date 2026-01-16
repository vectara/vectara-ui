import React, { cloneElement, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { VuiPortal } from "../portal/Portal";
import { FocusOn } from "react-focus-on";
import { VuiItemsInput, VuiNumberInput, VuiTextInput } from "../form";

export type AnchorSide = "left" | "right" | "rightUp" | "leftUp" | "upLeft" | "upRight";

export type Props = {
  button: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClickButton?: (e: React.MouseEvent<HTMLElement>) => void;
  padding?: boolean;
  anchorSide?: AnchorSide;
  anchorOffsetX?: number;
  anchorOffsetY?: number;
};

type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const calculatePopoverPosition = (
  button: HTMLElement | null,

  anchorOptions: { anchorSide: AnchorSide; offsetX: number; offsetY: number }
): Position | undefined => {
  if (!button) return undefined;

  const { anchorSide, offsetX, offsetY } = anchorOptions;
  const { left, right, width, height, top, bottom } = button.getBoundingClientRect();

  if (anchorSide === "rightUp") {
    // Anchor popover to the right side of the button, extending upwards.
    const adjustedTop = top + height + document.documentElement.scrollTop;
    const adjustedLeft = left + width + offsetX;
    return { top: `${adjustedTop}px`, left: `${adjustedLeft}px` };
  }

  if (anchorSide === "leftUp") {
    // Anchor popover to the left side of the button, extending upwards.
    const adjustedTop = top + height + document.documentElement.scrollTop;
    const adjustedRight = document.documentElement.clientWidth - left + offsetX;
    return { top: `${adjustedTop}px`, right: `${adjustedRight}px` };
  }

  if (anchorSide === "upLeft") {
    // Anchor popover above the button, aligned to the left edge.
    const adjustedBottom = document.documentElement.clientHeight - top + offsetY;
    return { bottom: `${adjustedBottom}px`, left: `${left}px` };
  }

  if (anchorSide === "upRight") {
    // Anchor popover above the button, aligned to the right edge.
    const adjustedBottom = document.documentElement.clientHeight - top + offsetY;
    const adjustedRight = document.documentElement.clientWidth - right;
    return { bottom: `${adjustedBottom}px`, right: `${adjustedRight}px` };
  }

  const adjustedTop = bottom + offsetY + document.documentElement.scrollTop;

  if (anchorSide === "left") {
    return { top: `${adjustedTop}px`, left: `${left}px` };
  }

  // Position against the right side of the element.
  const adjustedRight = document.documentElement.clientWidth - right;
  return { top: `${adjustedTop}px`, right: `${adjustedRight}px` };
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
  ...rest
}: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLElement | null>(null);
  const [, setPositionMarker] = useState<number>(0);
  const [showTransition, setShowTransition] = useState(false);

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

  const button = cloneElement(originalButton, buttonProps);

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

  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        setShowTransition(true);
      });
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting, and also
  // enable focus to properly return to the button when the user clicks
  // outside of the popover.
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      setIsOpen(false);
      setShowTransition(false);
    }, 0);
  };

  // Always keep menu position up to date. If we tried to cache this inside
  // a useEffect based on isOpen then there'd be a flicker if the width
  // of the button changes.
  const position = calculatePopoverPosition(buttonRef.current, {
    anchorSide,
    offsetX: anchorOffsetX,
    offsetY: anchorOffsetY
  });

  const classes = classNames("vuiPopover", className, {
    "vuiPopover-isLoaded": showTransition,
    "vuiPopover--rightUp": anchorSide === "rightUp",
    "vuiPopover--leftUp": anchorSide === "leftUp",
    "vuiPopover--upLeft": anchorSide === "upLeft",
    "vuiPopover--upRight": anchorSide === "upRight"
  });

  const contentClasses = classNames("vuiPopoverContent", {
    "vuiPopoverContent--padding": padding
  });

  return (
    <>
      {button}

      <VuiPortal>
        {isOpen && position && (
          <FocusOn
            onEscapeKey={onCloseDelayed}
            onClickOutside={onCloseDelayed}
            // Enable manual focus return to work.
            returnFocus={false}
            // Enable focus on contents when it's open,
            // but enable manual focus return to work when it's closed.
            autoFocus={isOpen}
            // Enable scrolling of the page.
            scrollLock={false}
            // Enable scrolling of the page.
            preventScrollOnFocus={false}
          >
            <div className={classes} style={position} {...rest}>
              {header && typeof header === "string" ? <div className="vuiPopoverTitle">{header}</div> : header}
              {children && <div className={contentClasses}>{children}</div>}
            </div>
          </FocusOn>
        )}
      </VuiPortal>
    </>
  );
};
