import { useState } from "react";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiImagePreview,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiToggle,
  CaptionPosition,
  DescriptionPosition,
  ImageSize
} from "../../../lib";

export const ImagePreview = () => {
  // State for controls
  const [showCaption, setShowCaption] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [captionPosition, setCaptionPosition] = useState<CaptionPosition>("bottom");
  const [descriptionPosition, setDescriptionPosition] = useState<DescriptionPosition>("right");
  const [size, setSize] = useState<ImageSize>("m");
  const [isLoading, setIsLoading] = useState(false);

  // Sample image URL - using a placeholder service
  const sampleImageUrl = "https://picsum.photos/seed/vectara/800/600";

  return (
    <>
      {/* Controls */}
      <VuiTitle size="s">
        <h3>Controls</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <VuiFlexContainer wrap spacing="l">
        <VuiFlexItem shrink={false}>
          <VuiToggle label="Show caption" checked={showCaption} onChange={(e) => setShowCaption(e.target.checked)} />
        </VuiFlexItem>

        <VuiFlexItem shrink={false}>
          <VuiToggle
            label="Show description"
            checked={showDescription}
            onChange={(e) => setShowDescription(e.target.checked)}
          />
        </VuiFlexItem>

        <VuiFlexItem shrink={false}>
          <VuiToggle label="Is loading" checked={isLoading} onChange={(e) => setIsLoading(e.target.checked)} />
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiFlexContainer wrap spacing="l" alignItems="center">
        <VuiFlexItem shrink={false}>
          <VuiText>
            <p>
              <strong>Caption position:</strong>
            </p>
          </VuiText>
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiFlexContainer spacing="s">
            {(["top", "bottom", "left", "right", "overlay"] as CaptionPosition[]).map((pos) => (
              <VuiFlexItem key={pos} shrink={false}>
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="captionPosition"
                    value={pos}
                    checked={captionPosition === pos}
                    onChange={(e) => setCaptionPosition(e.target.value as CaptionPosition)}
                    style={{ marginRight: "4px" }}
                  />
                  {pos}
                </label>
              </VuiFlexItem>
            ))}
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiFlexContainer wrap spacing="l" alignItems="center">
        <VuiFlexItem shrink={false}>
          <VuiText>
            <p>
              <strong>Description position:</strong>
            </p>
          </VuiText>
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiFlexContainer spacing="s">
            {(["top", "bottom", "left", "right"] as DescriptionPosition[]).map((pos) => (
              <VuiFlexItem key={pos} shrink={false}>
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="descriptionPosition"
                    value={pos}
                    checked={descriptionPosition === pos}
                    onChange={(e) => setDescriptionPosition(e.target.value as DescriptionPosition)}
                    style={{ marginRight: "4px" }}
                  />
                  {pos}
                </label>
              </VuiFlexItem>
            ))}
          </VuiFlexContainer>
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
            {(["xs", "s", "m", "l"] as ImageSize[]).map((sizeOption) => (
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

      <VuiImagePreview
        src={sampleImageUrl}
        alt="Sample landscape image"
        caption={showCaption ? "Beautiful landscape with mountains and lake" : undefined}
        captionPosition={captionPosition}
        description={
          showDescription
            ? "This is a sample description that provides more context about the image. It can be positioned in different locations relative to the image using the description position control."
            : undefined
        }
        descriptionPosition={descriptionPosition}
        size={size}
        isLoading={isLoading}
        onClick={() => console.log("Image clicked")}
      />

      <VuiSpacer size="xl" />
    </>
  );
};
