import { useState } from "react";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiImage,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiToggle,
  ImageSize
} from "../../../lib";

export const Image = () => {
  // State for controls
  const [showCaption, setShowCaption] = useState(true);
  const [size, setSize] = useState<ImageSize>("m");
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const sampleImageUrl = "https://picsum.photos/seed/picsum/4000/4000";

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
          <VuiToggle label="Show loading" checked={isLoading} onChange={(e) => setIsLoading(e.target.checked)} />
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiToggle label="Show preview" checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} />
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiFlexContainer wrap spacing="l" alignItems="center">
        <VuiFlexItem shrink={false}>
          <VuiText>
            <p>
              <strong>Size:</strong>
            </p>
          </VuiText>
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiFlexContainer spacing="s">
            {(["xs", "s", "m", "l", "xl", "full"] as ImageSize[]).map((sizeOption) => (
              <VuiFlexItem key={sizeOption} shrink={false}>
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="size"
                    value={sizeOption}
                    checked={size === sizeOption}
                    onChange={(e) => setSize(e.target.value as ImageSize)}
                    style={{ marginRight: "4px" }}
                  />
                  {sizeOption}
                </label>
              </VuiFlexItem>
            ))}
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="xl" />

      {/* Preview */}
      <VuiTitle size="s">
        <h3>Preview</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <VuiImage
        src={sampleImageUrl}
        alt="Sample landscape image"
        caption={showCaption ? "Beautiful landscape with mountains and lake" : undefined}
        size={size}
        isLoading={isLoading}
        allowPreview={showPreview}
      />
    </>
  );
};
