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

  // Reset index when opening/closing
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setCurrentIndex(initialIndex);
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : imageArray.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < imageArray.length - 1 ? prev + 1 : 0));
  };

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
                {/* Header with caption and close button */}
                <div className="vuiImagePreview__header">
                  <div className="vuiImagePreview__caption">
                    {imageArray[currentIndex].caption && (
                      <span>{imageArray[currentIndex].caption}</span>
                    )}
                  </div>
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
