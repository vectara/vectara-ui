import { VuiLoadingBar, VuiSpacer, VuiText } from "../../../lib";
import { LOADING_BAR_COLOR } from "../../../lib/components/loadingBar/LoadingBar";

export const LoadingBar = () => {
  return (
    <>
      <VuiText>
        <p>
          The loading bar anchors to the bottom edge of its nearest positioned ancestor, so it can signal background
          activity inside any container without disturbing its content.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      {LOADING_BAR_COLOR.map((color) => (
        <div key={color}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--vui-color-border-light)",
              borderRadius: "8px",
              padding: "16px"
            }}
          >
            <VuiText>
              <p>{color}</p>
            </VuiText>

            <VuiLoadingBar color={color} />
          </div>

          <VuiSpacer size="s" />
        </div>
      ))}
    </>
  );
};
