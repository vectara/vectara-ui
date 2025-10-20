import { useState } from "react";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiImage,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiToggle,
  CaptionPosition,
  ImageSize
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Image = () => {
  // State for controls
  const [showCaption, setShowCaption] = useState(true);
  const [captionPosition, setCaptionPosition] = useState<CaptionPosition>("bottom");
  const [flexPosition, setFlexPosition] = useState("start");
  const [customSize, setCustomSize] = useState(250);
  const [size, setSize] = useState<ImageSize>("m");
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showError, setShowError] = useState(false);

  const sampleImageUrl = "https://picsum.photos/seed/picsum/4000/4000";
  const debouncedSetCustomSize = (value: number) => setTimeout(() => setCustomSize(value), 300);

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
          <VuiToggle label="Show error" checked={showError} onChange={(e) => setShowError(e.target.checked)} />
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
              <strong>Caption position:</strong>
            </p>
          </VuiText>
        </VuiFlexItem>
        <VuiFlexItem shrink={false}>
          <VuiFlexContainer spacing="s">
            {(["top", "bottom", "overlay"] as CaptionPosition[]).map((pos) => (
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
        captionPosition={captionPosition}
        size={size}
        isLoading={isLoading}
        allowPreview={showPreview}
        errorMessage={showError ? "Failed to load image" : undefined}
      />

      <VuiSpacer size="xl" />

      <Subsection title="Positioning Image">
        <VuiFlexContainer wrap spacing="l" alignItems="center">
          <VuiFlexItem shrink={false}>
            <VuiText>
              <p>
                <strong>position:</strong>
              </p>
            </VuiText>
          </VuiFlexItem>
          <VuiFlexItem shrink={false}>
            <VuiFlexContainer spacing="s">
              {["start", "center", "end"].map((pos) => (
                <VuiFlexItem key={pos} shrink={false}>
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="flexPosition"
                      value={pos}
                      checked={flexPosition === pos}
                      onChange={(e) => setFlexPosition(e.target.value)}
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

        {/* @ts-expect-error using subset of justifyContent options */}
        <VuiFlexContainer justifyContent={flexPosition}>
          <VuiImage src={sampleImageUrl} alt="Sample landscape image" />
        </VuiFlexContainer>
      </Subsection>

      <VuiSpacer size="xl" />
      <Subsection title="Custom size">
        <VuiFlexContainer wrap spacing="l" alignItems="center">
          <VuiFlexItem shrink={false}>
            <VuiText>
              <p>
                <strong>Custom size ({`${customSize}px`}):</strong>
              </p>
            </VuiText>
          </VuiFlexItem>
          <VuiFlexItem shrink={false}>
            <input
              style={{ width: "100px" }}
              type="range"
              name="custom_size"
              min={50}
              max={800}
              step={50}
              value={customSize}
              onChange={(e) => debouncedSetCustomSize(Number(e.target.value))}
            />
          </VuiFlexItem>
        </VuiFlexContainer>
        <VuiSpacer size="m" />

        <div style={{ width: `${customSize}px` }}>
          <VuiImage
            src={sampleImageUrl}
            size="full"
            alt="Sample landscape image"
            caption={showCaption ? "Beautiful landscape with mountains and lake" : undefined}
            captionPosition={captionPosition}
          />
        </div>
      </Subsection>
    </>
  );
};
