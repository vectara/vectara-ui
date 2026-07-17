import { useRef, useState } from "react";
import { VuiDragBar, VuiText } from "../../../lib";
import "./dragBarExample.scss";

export const HorizontalSplit = () => {
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  return (
    <div className="dragBarExample" ref={containerRef}>
      <div className="dragBarExample__panel" style={{ flexBasis: `${leftWidth}%` }}>
        <VuiText>
          <p>Left panel: {Math.round(leftWidth)}%</p>
        </VuiText>
      </div>

      <VuiDragBar
        className="dragBarExample__dragBar"
        width={leftWidth}
        onWidthChange={setLeftWidth}
        containerRef={containerRef}
        isDraggingRef={isDraggingRef}
        unit="percent"
        anchor="left"
        clamp={{ kind: "percentRange", min: 20, max: 80 }}
        keyboardStep={5}
      />

      <div className="dragBarExample__panel dragBarExample__panel--grow">
        <VuiText>
          <p>Right panel. Drag the divider or focus it and use the arrow keys. The split is clamped to 20-80%.</p>
        </VuiText>
      </div>
    </div>
  );
};
