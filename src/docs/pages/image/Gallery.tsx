import { useState } from "react";
import { VuiGrid, VuiImage, VuiImagePreview } from "../../../lib";

export const Gallery = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const images = [
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

  const onClick = (index: number) => {
    setPreviewIndex(index);
    setIsPreviewOpen(true);
  };

  return (
    <>
      <div style={{ maxWidth: "600px" }}>
        <VuiGrid columns={3} spacing="xs">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative"
              }}
            >
              <VuiImage src={image.src} alt={image.alt} onClick={() => onClick(index)} aspectRatio="4/3" />

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
                  +{images.length - 4} more
                </div>
              )}
            </div>
          ))}
        </VuiGrid>
      </div>

      <VuiImagePreview
        images={images}
        initialIndex={previewIndex}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};
