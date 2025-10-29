import { useState } from "react";
import { VuiFlexContainer, VuiFlexItem, VuiImage, VuiImagePreview, VuiSpacer, VuiTitle, VuiToggle } from "../../../lib";

export const Image = () => {
  const [showCaption, setShowCaption] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const carouselImages = [
    {
      src: "https://picsum.photos/seed/476/4000/3500",
      alt: "Mountain landscape",
      caption: "Beautiful mountain landscape with snow peaks"
    },
    {
      src: "https://picsum.photos/seed/888/2000/1800",
      alt: "Ocean sunset",
      caption: "Stunning ocean sunset with vibrant colors"
    },
    {
      src: "https://picsum.photos/seed/232/800/600",
      alt: "Forest path",
      caption: "Peaceful forest path in autumn"
    },
    {
      src: "https://picsum.photos/seed/222/800/600",
      alt: "Desert dunes",
      caption: "Golden desert dunes at dusk"
    },
    {
      src: "https://picsum.photos/seed/343/800/600",
      alt: "City skyline",
      caption: "Modern city skyline at night"
    },
    {
      src: "https://picsum.photos/seed/232/800/600",
      alt: "Waterfall",
      caption: "Majestic waterfall in tropical jungle"
    }
  ];

  const handleThumbnailClick = (index: number) => {
    setCarouselStartIndex(index);
    setIsCarouselOpen(true);
  };

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

      <VuiTitle size="s">
        <h3>Preview</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <div style={{ maxWidth: "400px" }}>
        <VuiImage
          src="https://picsum.photos/seed/476/4000/3500"
          alt="Sample landscape image"
          caption={showCaption ? "Beautiful landscape with mountains and lake" : undefined}
          allowPreview={showPreview}
          isLoading={isLoading}
          isFailure={showError}
        />
      </div>

      <VuiSpacer size="xl" />

      <VuiTitle size="s">
        <h3>Multi-image carousel</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <div style={{ maxWidth: "600px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px"
          }}
        >
          {carouselImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "4px"
              }}
              onClick={() => handleThumbnailClick(index)}
            >
              <VuiImage src={image.src} alt={image.alt} allowPreview={false} />
              {index === 3 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600"
                  }}
                >
                  +{carouselImages.length - 4} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <VuiImagePreview
        images={carouselImages}
        initialIndex={carouselStartIndex}
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
      />
    </>
  );
};
