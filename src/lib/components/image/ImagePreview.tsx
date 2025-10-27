import { useEffect, useRef, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";

type ImageData = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: ImageData | ImageData[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const VuiImagePreview = ({ images, initialIndex = 0, isOpen, onClose, className }: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  // Normalize single image to array
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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

  return (
    <VuiPortal>
      {isOpen && (
        <div className={className}>
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
                  <img
                    src={imageArray[currentIndex].src}
                    alt={imageArray[currentIndex].alt}
                    className="vuiImagePreview__image"
                    draggable={false}
                  />
                </div>
              </div>
            </VuiScreenBlock>
          </FocusOn>
        </div>
      )}
    </VuiPortal>
  );
};
