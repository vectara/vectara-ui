import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { BiX, BiRotateLeft, BiRotateRight, BiZoomIn, BiZoomOut, BiRefresh, BiCommentDetail } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiButtonPrimary } from "../button/ButtonPrimary";
import { VuiSpacer } from "../spacer/Spacer";

type Props = {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
  description?: string;
  caption?: string;
  controls?: {
    allowRotation?: boolean;
    allowZoom?: boolean;
    allowReset?: boolean;
    allowDrag?: boolean;
  };
};

export const VuiImagePreview = ({
  src,
  alt,
  isOpen,
  onClose,
  className,
  title,
  description,
  caption,
  controls
}: Props) => {
  const { allowRotation = true, allowZoom = true, allowReset = true, allowDrag = true } = controls || {};
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  const showInfoButton = !!(title || description);
  const showToolbar = allowRotation || allowZoom || allowReset || showInfoButton;

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const SCALE_STEP = 0.25;
  const ROTATION_STEP = 90;

  // Return focus on unmount
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      // Reset transform values when opening
      setRotation(0);
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsInfoOverlayOpen(false);
      setIsDescriptionExpanded(false);
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      onClose?.();
    }, 0);
  };

  const handleRotateLeft = () => {
    setRotation((prev) => prev - ROTATION_STEP);
  };

  const handleRotateRight = () => {
    setRotation((prev) => prev + ROTATION_STEP);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + SCALE_STEP, MAX_SCALE));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - SCALE_STEP, MIN_SCALE));
  };

  const handleReset = () => {
    setRotation(0);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleToggleInfo = () => {
    if (isInfoOverlayOpen && isDescriptionExpanded) setIsDescriptionExpanded(false);
    setIsInfoOverlayOpen((prev) => !prev);
  };

  const isResetDisabled = () => {
    const isRotationReset = allowRotation ? rotation === 0 : true;
    const isScaleReset = allowZoom ? scale === 1 : true;
    const isPositionReset = allowDrag ? position.x === 0 && position.y === 0 : true;
    return isRotationReset && isScaleReset && isPositionReset;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!allowDrag) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
    setIsDragging(false);
  };

  // Handle mouse leave to stop dragging if mouse leaves the container
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleGlobalMouseUp);
      return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }
  }, [isDragging]);

  const baseClasses = classNames("vuiImagePreview", className);
  const imageClasses = classNames("vuiImagePreview__image", {
    "vuiImagePreview__image--dragging": isDragging
  });

  return (
    <VuiPortal>
      {isOpen && (
        <VuiScreenBlock onClick={onCloseDelayed}>
          <div className={baseClasses}>
            <FocusOn
              onEscapeKey={onCloseDelayed}
              onClickOutside={onCloseDelayed}
              returnFocus={false}
              autoFocus={isOpen}
            >
              <div className="vuiImagePreview__container">
                <div className="vuiImagePreview__closeButton">
                  <VuiIconButton
                    aria-label="Close preview"
                    onClick={onCloseDelayed}
                    color="neutral"
                    icon={
                      <VuiIcon size="l" color="empty">
                        <BiX />
                      </VuiIcon>
                    }
                  />
                </div>

                <div
                  className="vuiImagePreview__imageContainer"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <img
                    src={src}
                    alt={alt}
                    className={imageClasses}
                    onMouseDown={handleMouseDown}
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
                      cursor: allowDrag ? (isDragging ? "grabbing" : "grab") : "default"
                    }}
                    draggable={false}
                  />
                </div>

                {isInfoOverlayOpen && showInfoButton && (
                  <div className="vuiImagePreview__infoOverlay">
                    {title && (
                      <VuiText>
                        <VuiTextColor color="empty">
                          <h3>{title}</h3>
                        </VuiTextColor>
                      </VuiText>
                    )}
                    {description && (
                      <>
                        <VuiText
                          className={!isDescriptionExpanded ? "vuiImagePreview__infoDescriptionText--collapsed" : ""}
                        >
                          <VuiTextColor color="empty">{description}</VuiTextColor>
                        </VuiText>
                        <VuiSpacer size="s" />
                        {description.length > 150 && (
                          <VuiButtonPrimary color="primary" onClick={() => setIsDescriptionExpanded((prev) => !prev)}>
                            {isDescriptionExpanded ? "Show less" : "Show more"}
                          </VuiButtonPrimary>
                        )}
                      </>
                    )}
                  </div>
                )}

                {showToolbar && (
                  <div className="vuiImagePreview__toolbar">
                    <VuiFlexContainer spacing="s" alignItems="center" justifyContent="center">
                      {showInfoButton && (
                        <VuiFlexItem grow={false}>
                          <VuiIconButton
                            aria-label={isInfoOverlayOpen ? "Hide info" : "Show info"}
                            onClick={handleToggleInfo}
                            color="neutral"
                            icon={
                              <VuiIcon size="m" color="empty">
                                <BiCommentDetail />
                              </VuiIcon>
                            }
                          />
                        </VuiFlexItem>
                      )}
                      {allowRotation && (
                        <>
                          <VuiFlexItem grow={false}>
                            <VuiIconButton
                              aria-label="Rotate left"
                              onClick={handleRotateLeft}
                              color="neutral"
                              icon={
                                <VuiIcon size="m" color="empty">
                                  <BiRotateLeft />
                                </VuiIcon>
                              }
                            />
                          </VuiFlexItem>
                          <VuiFlexItem grow={false}>
                            <VuiIconButton
                              aria-label="Rotate right"
                              onClick={handleRotateRight}
                              color="neutral"
                              icon={
                                <VuiIcon size="m" color="empty">
                                  <BiRotateRight />
                                </VuiIcon>
                              }
                            />
                          </VuiFlexItem>
                        </>
                      )}
                      {allowZoom && (
                        <>
                          <VuiFlexItem grow={false}>
                            <VuiIconButton
                              aria-label="Zoom out"
                              onClick={handleZoomOut}
                              color="neutral"
                              isDisabled={scale <= MIN_SCALE}
                              icon={
                                <VuiIcon size="m" color="empty">
                                  <BiZoomOut />
                                </VuiIcon>
                              }
                            />
                          </VuiFlexItem>
                          <VuiFlexItem grow={false}>
                            <VuiIconButton
                              aria-label="Zoom in"
                              onClick={handleZoomIn}
                              color="neutral"
                              isDisabled={scale >= MAX_SCALE}
                              icon={
                                <VuiIcon size="m" color="empty">
                                  <BiZoomIn />
                                </VuiIcon>
                              }
                            />
                          </VuiFlexItem>
                        </>
                      )}
                      {allowReset && (
                        <VuiFlexItem grow={false}>
                          <VuiIconButton
                            aria-label="Reset"
                            onClick={handleReset}
                            color="neutral"
                            isDisabled={isResetDisabled()}
                            icon={
                              <VuiIcon size="m" color="empty">
                                <BiRefresh />
                              </VuiIcon>
                            }
                          />
                        </VuiFlexItem>
                      )}
                    </VuiFlexContainer>
                  </div>
                )}

                {caption && (
                  <div className="vuiImagePreview__caption">
                    <VuiText size="xs">
                      <VuiTextColor color="empty">{caption}</VuiTextColor>
                    </VuiText>
                  </div>
                )}
              </div>
            </FocusOn>
          </div>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
