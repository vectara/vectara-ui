import { useEffect, useRef, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiX, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import classNames from "classnames";
import { VuiTextColor } from "../typography/TextColor";

type ImageData = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: ImageData[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const VuiImagePreview = ({ images, initialIndex = 0, isOpen, onClose, className }: Props) => {
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const isCarousel = images.length > 1;
  const headerClasses = classNames("vuiImagePreview__header", {
    "vuiImagePreview__header--isVisible": isCarousel
  });
  const imageContainerClasses = classNames("vuiImagePreview__imageContainer", {
    "vuiImagePreview__imageContainer--topMargin": isCarousel
  });

  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setCurrentIndex(initialIndex);
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen, initialIndex]);

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
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleOnClose = () => {
    onClose?.();
  };

  return (
    <VuiPortal>
      {isOpen && (
        <div className={className}>
          <FocusOn onEscapeKey={handleOnClose} returnFocus={false} autoFocus={isOpen}>
            <figure>
              <div className="vuiImagePreview__container">
                <div className="vuiImagePreview__mask" onClick={handleOnClose}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <VuiFlexContainer alignItems="center" justifyContent="spaceBetween" className={headerClasses}>
                      <VuiFlexItem>
                        <VuiFlexContainer alignItems="center" spacing="xs">
                          {isCarousel && (
                            <>
                              <VuiFlexItem>
                                <VuiIconButton
                                  aria-label="Previous image"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevious();
                                  }}
                                  color="neutral"
                                  size="s"
                                  icon={
                                    <VuiIcon size="m" color="empty">
                                      <BiChevronLeft />
                                    </VuiIcon>
                                  }
                                />
                              </VuiFlexItem>
                              <VuiFlexItem>
                                <VuiIconButton
                                  aria-label="Next image"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                  }}
                                  color="neutral"
                                  size="s"
                                  icon={
                                    <VuiIcon size="m" color="empty">
                                      <BiChevronRight />
                                    </VuiIcon>
                                  }
                                />
                              </VuiFlexItem>
                              <VuiFlexItem>
                                <VuiText size="s">
                                  <VuiTextColor color="empty">
                                    <figcaption>
                                      {`Image ${currentIndex + 1} of ${images.length}: ${images[currentIndex].caption}`}
                                    </figcaption>
                                  </VuiTextColor>
                                </VuiText>
                              </VuiFlexItem>
                            </>
                          )}
                        </VuiFlexContainer>
                      </VuiFlexItem>
                      <VuiFlexItem grow={false}>
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
                      </VuiFlexItem>
                    </VuiFlexContainer>
                  </div>

                  <div className={imageContainerClasses}>
                    <img
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                      className="vuiImagePreview__image"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </figure>
          </FocusOn>
        </div>
      )}
    </VuiPortal>
  );
};
