import { ReactNode, useRef, useState } from "react";
import classNames from "classnames";
import { VuiAppContent } from "../app/AppContent";
import { VuiDragBar } from "../dragBar/DragBar";

const MIN_PANE_WIDTH = 360;
const MIN_MAIN_WIDTH = 360;
const KEYBOARD_STEP = 40;

type Props = {
  children: ReactNode;
  pane?: ReactNode;
  defaultPaneWidth?: number;
  mainPadding?: boolean;
};

export const VuiSidePaneLayout = ({ children, pane, defaultPaneWidth = 500, mainPadding = true }: Props) => {
  const [paneWidth, setPaneWidth] = useState(defaultPaneWidth);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  return (
    <VuiAppContent padding="none" fullWidth className="vuiSidePaneLayout">
      <div
        className={classNames("vuiSidePaneLayout__split", { "vuiSidePaneLayout__split--isDragging": isDragging })}
        ref={containerRef}
      >
        <div className={classNames("vuiSidePaneLayout__main", { "vuiSidePaneLayout__main--noPadding": !mainPadding })}>
          {children}
        </div>

        {pane && (
          <>
            <VuiDragBar
              className="vuiSidePaneLayout__dragBar"
              width={paneWidth}
              onWidthChange={setPaneWidth}
              containerRef={containerRef}
              isDraggingRef={isDraggingRef}
              unit="pixel"
              anchor="right"
              clamp={{ kind: "pixelReserve", minSelf: MIN_PANE_WIDTH, minOpposite: MIN_MAIN_WIDTH }}
              keyboardStep={KEYBOARD_STEP}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            />

            <div className="vuiSidePaneLayout__pane" style={{ flexBasis: `${paneWidth}px` }}>
              {pane}
            </div>
          </>
        )}
      </div>
    </VuiAppContent>
  );
};
