import { useState } from "react";
import { VuiFlexContainer, VuiFlexItem, VuiImage, VuiImagePreview, VuiSpacer, VuiToggle } from "../../../lib";

export const Image = () => {
  const [showCaption, setShowCaption] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const image = {
    src: "https://picsum.photos/seed/476/4000/3500",
    alt: "Sample landscape image",
    caption: showCaption ? "Beautiful landscape with mountains and lake" : undefined
  };

  return (
    <>
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

      <VuiSpacer size="m" />

      <div style={{ maxWidth: "400px" }}>
        <VuiImage {...image} onClick={() => setIsPreviewOpen(true)} isLoading={isLoading} isFailure={showError} />
      </div>

      <VuiImagePreview images={[image]} isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </>
  );
};
