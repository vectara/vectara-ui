import { useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiSkeleton } from "../skeleton/Skeleton";
import { VuiImagePreview } from "./ImagePreview";

export type ImageSize = "xs" | "s" | "m" | "l" | "xl" | "full";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  size?: ImageSize;
  className?: string;
  isLoading?: boolean;
  allowPreview?: boolean; // allows image to be opened in a modal
};

const sizeMap = {
  xs: 100,
  s: 200,
  m: 400,
  l: 600,
  xl: 800,
  full: "100%"
} as const;

const sizeConfig = {
  xs: { skeletonRows: 2.5 },
  s: { skeletonRows: 2.5 },
  m: { skeletonRows: 3.25 },
  l: { skeletonRows: 3.25 },
  xl: { skeletonRows: 4.25 },
  full: { skeletonRows: 4.25 }
} as const;

export const VuiImage = ({
  src,
  alt,
  caption,
  size = "m",
  className,
  isLoading = false,
  allowPreview = false
}: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const classes = classNames("vuiImage", `vuiImage--${size}`, className);

  const { skeletonRows } = sizeConfig[size];

  const handlePreviewClick = () => {
    if (allowPreview) {
      setIsPreviewOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div style={{ width: size === "full" ? sizeMap[size] : `${sizeMap[size]}px` }}>
        <VuiSkeleton rows={skeletonRows} />
      </div>
    );
  }

  const imageClasses = classNames("vuiImage__image", {
    "vuiImage__image--clickable": allowPreview
  });

  return (
    <>
      <VuiFlexContainer direction="column" className={classes} spacing="s">
        <VuiFlexItem grow={false}>
          <div className="vuiImage__imageWrapper">
            <img src={src} alt={alt} className={imageClasses} onClick={handlePreviewClick} />
          </div>
        </VuiFlexItem>
        {caption && (
          <VuiFlexItem grow={false}>
            <VuiText size="s">{caption}</VuiText>
          </VuiFlexItem>
        )}
      </VuiFlexContainer>
      {allowPreview && (
        <VuiImagePreview src={src} alt={alt} isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      )}
    </>
  );
};
