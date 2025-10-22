import { useEffect, useRef } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";

type Props = {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const VuiImagePreview = ({ src, alt, isOpen, onClose, className }: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  // Return focus on unmount
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting
  const handleOnClose = () => {
    onClose?.();
  };

  const baseClasses = classNames("vuiImagePreview", className);

  return (
    <VuiPortal>
      {isOpen && (
        <div className={baseClasses}>
          <FocusOn onEscapeKey={handleOnClose} returnFocus={false} autoFocus={isOpen}>
            <VuiScreenBlock onClick={handleOnClose}>
              <div className="vuiImagePreview__container">
                <div className="vuiImagePreview__closeButton">
                  <VuiIconButton
                    aria-label="Close preview"
                    onClick={handleOnClose}
                    color="neutral"
                    icon={
                      <VuiIcon size="l" color="empty">
                        <BiX />
                      </VuiIcon>
                    }
                  />
                </div>

                <div className="vuiImagePreview__imageContainer">
                  <img src={src} alt={alt} className="vuiImagePreview__image" draggable={false} />
                </div>
              </div>
            </VuiScreenBlock>
          </FocusOn>
        </div>
      )}
    </VuiPortal>
  );
};
