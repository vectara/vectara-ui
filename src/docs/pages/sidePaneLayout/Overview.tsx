import { VuiSidePaneLayout, VuiSpacer, VuiText, VuiTitle } from "../../../lib";
import "./sidePaneLayoutExample.scss";

export const Overview = () => {
  return (
    <div className="sidePaneLayoutExample">
      <VuiSidePaneLayout
        pane={
          <div className="sidePaneLayoutExample__pane">
            <VuiTitle size="xs">
              <h4>Side pane</h4>
            </VuiTitle>

            <VuiSpacer size="s" />

            <VuiText>
              <p>Drag the divider on the left edge to resize. Both panels keep a 360px minimum.</p>
            </VuiText>
          </div>
        }
      >
        <VuiTitle size="s">
          <h3>Main content</h3>
        </VuiTitle>

        <VuiSpacer size="s" />

        <VuiText>
          <p>The main region grows and shrinks as the pane is resized. It scrolls independently of the pane.</p>
        </VuiText>
      </VuiSidePaneLayout>
    </div>
  );
};
