import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { BiX, BiRotateLeft, BiRotateRight, BiZoomIn, BiZoomOut, BiRefresh } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";

type Props = {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const VuiImagePreview = ({ src, alt, isOpen, onClose, className }: Props) => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const returnFocusElRef = useRef<HTMLElement | null>(null);

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

  const handleMouseDown = (e: React.MouseEvent) => {
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

  const classes = classNames("vuiImagePreview", className);

  return (
    <VuiPortal>
      {isOpen && (
        <div className={classes}>
          <div className="vuiImagePreview__screenBlock" />
          <FocusOn onEscapeKey={onCloseDelayed} onClickOutside={onCloseDelayed} returnFocus={false} autoFocus={isOpen}>
            <div className="vuiImagePreview__container">
              {/* Close button */}
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

              {/* Image container */}
              <div className="vuiImagePreview__imageContainer" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <img
                  src={src}
                  alt={alt}
                  className={classNames("vuiImagePreview__image", {
                    "vuiImagePreview__image--dragging": isDragging
                  })}
                  onMouseDown={handleMouseDown}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
                    cursor: isDragging ? "grabbing" : "grab"
                  }}
                  draggable={false}
                />
              </div>

              {/* Toolbar */}
              <div className="vuiImagePreview__toolbar">
                <VuiFlexContainer spacing="s" alignItems="center" justifyContent="center">
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
                  <VuiFlexItem grow={false}>
                    <VuiIconButton
                      aria-label="Reset"
                      onClick={handleReset}
                      color="neutral"
                      isDisabled={rotation === 0 && scale === 1 && position.x === 0 && position.y === 0}
                      icon={
                        <VuiIcon size="m" color="empty">
                          <BiRefresh />
                        </VuiIcon>
                      }
                    />
                  </VuiFlexItem>
                </VuiFlexContainer>
              </div>
            </div>
          </FocusOn>
        </div>
      )}
    </VuiPortal>
  );
};
