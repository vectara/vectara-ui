import React, { cloneElement, useEffect, useRef, useState } from "react";
import { VuiPortal } from "../portal/Portal";
import { FocusOn } from "react-focus-on";

export type Props = {
  button: React.ReactElement;
  children?: React.ReactNode;
  header?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type Position = {
  top: number;
  right: number;
};

const getPosition = (button: HTMLElement | null): Position | undefined => {
  if (!button) return undefined;
  const { bottom, right } = button.getBoundingClientRect();
  return {
    top: bottom + 2 + document.documentElement.scrollTop,
    right: window.innerWidth - right
  };
};

export const VuiPopover = ({ button: originalButton, children, header, isOpen, setIsOpen, ...rest }: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [positionMarker, setPositionMarker] = useState<number>(0);

  const button = cloneElement(originalButton, {
    isPressed: isOpen,
    onClick: () => {
      setIsOpen(!isOpen);
    },
    ref: (node: HTMLElement) => {
      buttonRef.current = node;
    }
  });

  useEffect(() => {
    const onResizeWindow = () => {
      // Force a re-render when the window resizes.
      setPositionMarker(Date.now());
    };

    window.addEventListener("resize", onResizeWindow);

    return () => {
      window.removeEventListener("resize", onResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
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
    }, 0);
  };

  // Always keep menu position up to date. If we tried to cache this inside
  // a useEffect based on isOpen then there'd be a flicker if the width
  // of the button changes.
  const position = getPosition(buttonRef.current);

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
            <div className="vuiPopover" style={{ top: `${position.top}px`, right: `${position.right}px` }} {...rest}>
              {header}
              {children && <div className="vuiPopoverContent">{children}</div>}
            </div>
          </FocusOn>
        )}
      </VuiPortal>
    </>
  );
};
