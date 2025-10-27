import { useEffect, useRef, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiX, BiChevronLeft, BiChevronRight, BiImage, BiError } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";

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
  const [imageLoadingStates, setImageLoadingStates] = useState<{ [key: number]: boolean }>({});
  const [imageErrorStates, setImageErrorStates] = useState<{ [key: number]: boolean }>({});

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
                  {/* Previous button - only show if multiple images */}
                  {imageArray.length > 1 && (
                    <div className="vuiImagePreview__navButton vuiImagePreview__navButton--prev">
                      <VuiIconButton
                        aria-label="Previous image"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevious();
                        }}
                        color="neutral"
                        icon={
                          <VuiIcon size="l" color="empty">
                            <BiChevronLeft />
                          </VuiIcon>
                        }
                      />
                    </div>
                  )}

                  {/* Loading state */}
                  {imageLoadingStates[currentIndex] && !imageErrorStates[currentIndex] && (
                    <div className="vuiImagePreview__placeholder">
                      <div className="vuiImagePreview__iconWrapper">
                        <VuiIcon color="subdued" size="xxxl">
                          <BiImage />
                        </VuiIcon>
                      </div>
                    </div>
                  )}

                  {/* Error state */}
                  {imageErrorStates[currentIndex] && (
                    <div className="vuiImagePreview__placeholder vuiImagePreview__placeholder--error">
                      <VuiFlexContainer direction="column" alignItems="center" justifyContent="center" spacing="s">
                        <VuiFlexItem grow={false}>
                          <div className="vuiImagePreview__iconWrapper">
                            <VuiIcon size="m" color="danger">
                              <BiError />
                            </VuiIcon>
                          </div>
                        </VuiFlexItem>
                        <VuiFlexItem grow={false}>
                          <VuiText size="s" align="center">
                            <p>Failed to load image</p>
                          </VuiText>
                        </VuiFlexItem>
                      </VuiFlexContainer>
                    </div>
                  )}

                  {/* Image - hidden during loading/error */}
                  <img
                    src={imageArray[currentIndex].src}
                    alt={imageArray[currentIndex].alt}
                    className="vuiImagePreview__image"
                    draggable={false}
                    onLoadStart={() => {
                      setImageLoadingStates((prev) => ({ ...prev, [currentIndex]: true }));
                    }}
                    onLoad={() => {
                      setImageLoadingStates((prev) => ({ ...prev, [currentIndex]: false }));
                      setImageErrorStates((prev) => ({ ...prev, [currentIndex]: false }));
                    }}
                    onError={() => {
                      setImageLoadingStates((prev) => ({ ...prev, [currentIndex]: false }));
                      setImageErrorStates((prev) => ({ ...prev, [currentIndex]: true }));
                    }}
                    style={{
                      display:
                        imageLoadingStates[currentIndex] || imageErrorStates[currentIndex] ? "none" : "block"
                    }}
                  />

                  {/* Next button - only show if multiple images */}
                  {imageArray.length > 1 && (
                    <div className="vuiImagePreview__navButton vuiImagePreview__navButton--next">
                      <VuiIconButton
                        aria-label="Next image"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        color="neutral"
                        icon={
                          <VuiIcon size="l" color="empty">
                            <BiChevronRight />
                          </VuiIcon>
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </VuiScreenBlock>
          </FocusOn>
        </div>
      )}
    </VuiPortal>
  );
};
