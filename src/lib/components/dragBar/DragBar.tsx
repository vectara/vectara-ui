import { useEffect } from "react";
import classNames from "classnames";

type Unit = "percent" | "pixel";
type Anchor = "left" | "right";

// How the resized panel's width is bounded. `percentRange` clamps to a literal
// percent window. `pixelReserve` keeps both the resized panel and its neighbor
// above a pixel minimum, deriving the max from the container width at drag time.
export type DragBarClamp =
  | { kind: "percentRange"; min: number; max: number }
  | { kind: "pixelReserve"; minSelf: number; minOpposite: number };

type Props = {
  width: number;
  onWidthChange: (width: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  isDraggingRef: React.MutableRefObject<boolean>;
  unit: Unit;
  // The container edge the resized panel is anchored to. Determines how the
  // pointer maps to a width and which arrow key grows the panel.
  anchor: Anchor;
  clamp: DragBarClamp;
  keyboardStep: number;
  disabled?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  className?: string;
};

export const VuiDragBar = ({
  width,
  onWidthChange,
  containerRef,
  isDraggingRef,
  unit,
  anchor,
  clamp,
  keyboardStep,
  disabled = false,
  onDragStart,
  onDragEnd,
  className
}: Props) => {
  const toPx = (value: number, containerWidth: number) => (unit === "percent" ? (value / 100) * containerWidth : value);

  const toValue = (px: number, containerWidth: number) => (unit === "percent" ? (px / containerWidth) * 100 : px);

  // Clamp in the value's unit. `pixelReserve` needs the container to convert its
  // pixel bounds, so without a rect it leaves the value untouched.
  const clampValue = (value: number, containerRect: DOMRect | undefined) => {
    if (clamp.kind === "percentRange") {
      return Math.min(Math.max(value, clamp.min), clamp.max);
    }

    if (!containerRect) return value;

    const maxSelfPx = Math.max(clamp.minSelf, containerRect.width - clamp.minOpposite);
    const clampedPx = Math.min(Math.max(toPx(value, containerRect.width), clamp.minSelf), maxSelfPx);
    return toValue(clampedPx, containerRect.width);
  };

  const growKey = anchor === "left" ? "ArrowRight" : "ArrowLeft";
  const shrinkKey = anchor === "left" ? "ArrowLeft" : "ArrowRight";

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const selfPx = anchor === "left" ? e.clientX - containerRect.left : containerRect.right - e.clientX;
    onWidthChange(clampValue(toValue(selfPx, containerRect.width), containerRect));
  };

  const handleMouseDown = () => {
    if (disabled) return;
    isDraggingRef.current = true;
    onDragStart?.();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    onDragEnd?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key !== growKey && e.key !== shrinkKey) return;

    e.preventDefault();

    const delta = e.key === growKey ? keyboardStep : -keyboardStep;
    onWidthChange(clampValue(width + delta, containerRef.current?.getBoundingClientRect()));
  };

  useEffect(() => {
    if (!disabled) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [disabled]);

  return (
    <div className={classNames("vuiDragBar", className)}>
      <div
        className={classNames("vuiDragBar__hitArea", { "vuiDragBar__hitArea--disabled": disabled })}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panels"
        title="Drag to resize panels"
      />
    </div>
  );
};
