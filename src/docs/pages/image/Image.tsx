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
  const [allowRotation, setAllowRotation] = useState(true);
  const [allowZoom, setAllowZoom] = useState(true);
  const [allowReset, setAllowReset] = useState(true);
  const [allowDrag, setAllowDrag] = useState(true);
  const [showPreviewInfo, setShowPreviewInfo] = useState(false);
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

      {showPreview && (
        <>
          <VuiText>
            <p>
              <strong>Preview controls:</strong>
            </p>
          </VuiText>
          <VuiSpacer size="xs" />

          <VuiFlexContainer wrap spacing="l">
            <VuiFlexItem shrink={false}>
              <VuiToggle
                label="Allow rotation"
                checked={allowRotation}
                onChange={(e) => setAllowRotation(e.target.checked)}
              />
            </VuiFlexItem>
            <VuiFlexItem shrink={false}>
              <VuiToggle label="Allow zoom" checked={allowZoom} onChange={(e) => setAllowZoom(e.target.checked)} />
            </VuiFlexItem>
            <VuiFlexItem shrink={false}>
              <VuiToggle label="Allow reset" checked={allowReset} onChange={(e) => setAllowReset(e.target.checked)} />
            </VuiFlexItem>
            <VuiFlexItem shrink={false}>
              <VuiToggle label="Allow drag" checked={allowDrag} onChange={(e) => setAllowDrag(e.target.checked)} />
            </VuiFlexItem>
            <VuiFlexItem shrink={false}>
              <VuiToggle
                label="Show preview info"
                checked={showPreviewInfo}
                onChange={(e) => setShowPreviewInfo(e.target.checked)}
              />
            </VuiFlexItem>
          </VuiFlexContainer>

          <VuiSpacer size="m" />
        </>
      )}

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
        previewTitle={showPreviewInfo ? "Mountain Landscape" : undefined}
        previewDescription={
          showPreviewInfo
            ? "This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains."
            : undefined
        }
        previewCaption={showPreviewInfo ? "Photo by John Doe • 2024" : undefined}
        controls={{ allowDrag, allowReset, allowZoom, allowRotation }}
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
          <VuiImage src={sampleImageUrl} alt="Sample landscape image" allowPreview />
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
          <VuiImage src={sampleImageUrl} size="full" alt="Sample landscape image" />
        </div>
      </Subsection>

      <VuiSpacer size="xl" />
      <Subsection title="Preview with Title, Description, and Caption">
        <VuiText>
          <p>
            Click on the images below to open the preview modal with title, description, and caption. The info button
            will appear in the toolbar when title or description is provided.
          </p>
        </VuiText>
        <VuiSpacer size="m" />

        <VuiFlexContainer spacing="l" wrap>
          <VuiFlexItem>
            <VuiText>
              <p>
                <strong>With all info:</strong>
              </p>
            </VuiText>
            <VuiSpacer size="xs" />
            <VuiImage
              src={sampleImageUrl}
              alt="Mountain landscape"
              size="m"
              allowPreview
              previewTitle="Mountain Landscape"
              previewDescription="This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains. This stunning photograph captures the majestic beauty of a mountain range at sunset. The golden hour light creates a warm glow across the peaks, while the valley below is shrouded in soft shadows. This image was taken during a hiking expedition in the Rocky Mountains."
              previewCaption="Photo by John Doe • 2024"
            />
          </VuiFlexItem>

          <VuiFlexItem>
            <VuiText>
              <p>
                <strong>Title only:</strong>
              </p>
            </VuiText>
            <VuiSpacer size="xs" />
            <VuiImage
              src={sampleImageUrl}
              alt="Mountain landscape"
              size="m"
              allowPreview
              previewTitle="Mountain Landscape"
            />
          </VuiFlexItem>

          <VuiFlexItem>
            <VuiText>
              <p>
                <strong>Description only:</strong>
              </p>
            </VuiText>
            <VuiSpacer size="xs" />
            <VuiImage
              src={sampleImageUrl}
              alt="Mountain landscape"
              size="m"
              allowPreview
              previewDescription="A beautiful mountain landscape captured at sunset."
            />
          </VuiFlexItem>

          <VuiFlexItem>
            <VuiText>
              <p>
                <strong>Caption only:</strong>
              </p>
            </VuiText>
            <VuiSpacer size="xs" />
            <VuiImage
              src={sampleImageUrl}
              alt="Mountain landscape"
              size="m"
              allowPreview
              previewCaption="Photo by John Doe • 2024"
            />
          </VuiFlexItem>
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
