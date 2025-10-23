import { useState } from "react";
import { VuiFlexContainer, VuiFlexItem, VuiImage, VuiSpacer, VuiTitle, VuiToggle } from "../../../lib";

export const Image = () => {
  // State for controls
  const [showCaption, setShowCaption] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const sampleImageUrl = "https://picsum.photos/seed/picsum/4000/3500";

  return (
    <>
      <VuiTitle size="s">
        <h3>Controls</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <VuiFlexContainer wrap spacing="l">
        <VuiFlexItem shrink={false}>
          <VuiToggle label="Show caption" checked={showCaption} onChange={(e) => setShowCaption(e.target.checked)} />
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiToggle label="Show preview" checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} />
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiToggle
            label="Loading state"
            checked={isLoading}
            onChange={(e) => {
              setIsLoading(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
          />
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiToggle
            label="Error state"
            checked={showError}
            onChange={(e) => {
              setShowError(e.target.checked);
              if (e.target.checked) setIsLoading(false);
            }}
          />
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="xl" />

      {/* Preview */}
      <VuiTitle size="s">
        <h3>Preview</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <div style={{ maxWidth: "400px" }}>
        <VuiImage
          src={sampleImageUrl}
          alt="Sample landscape image"
          caption={showCaption ? "Beautiful landscape with mountains and lake" : undefined}
          allowPreview={showPreview}
          isLoading={isLoading}
          isFailure={showError}
        />
      </div>
    </>
  );
};
