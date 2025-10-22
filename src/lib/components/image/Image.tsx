import { useState } from "react";
import classNames from "classnames";
import { BiShow, BiError } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiSkeleton } from "../skeleton/Skeleton";
import { VuiImagePreview } from "./ImagePreview";
import { VuiTooltip } from "../tooltip/Tooltip";
import { VuiIcon } from "../icon/Icon";
import { VuiTextColor } from "../typography/TextColor";

export type ImageSize = "xs" | "s" | "m" | "l" | "xl" | "full";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  size?: ImageSize;
  className?: string;
  isLoading?: boolean;
  allowPreview?: boolean;
  errorMessage?: string;
  previewTitle?: string;
  previewDescription?: string;
  previewCaption?: string;
  controls?: {
    allowRotation?: boolean;
    allowZoom?: boolean;
    allowReset?: boolean;
    allowDrag?: boolean;
  };
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
  xs: { skeletonRows: 2.5, previewTextSize: "xs", previewIconSize: 16 },
  s: { skeletonRows: 2.5, previewTextSize: "s", previewIconSize: 16 },
  m: { skeletonRows: 3.25, previewTextSize: "m", previewIconSize: 24 },
  l: { skeletonRows: 3.25, previewTextSize: "m", previewIconSize: 24 },
  xl: { skeletonRows: 4.25, previewTextSize: "l", previewIconSize: 32 },
  full: { skeletonRows: 4.25, previewTextSize: "l", previewIconSize: 32 }
} as const;

export const VuiImage = ({
  src,
  alt,
  caption,
  size = "m",
  className,
  isLoading = false,
  allowPreview = false,
  errorMessage,
  previewTitle,
  previewDescription,
  previewCaption,
  controls
}: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const classes = classNames("vuiImage", `vuiImage--${size}`, className);

  const { skeletonRows, previewTextSize, previewIconSize } = sizeConfig[size];

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

  if (errorMessage) {
    const renderError = (
      <div style={{ width: size === "full" ? sizeMap[size] : `${sizeMap[size]}px` }}>
        <VuiFlexContainer direction="column" alignItems="center" justifyContent="center" className="vuiImage__error">
          <VuiIcon color="danger">
            <BiError size={previewIconSize} />
          </VuiIcon>
          {size !== "xs" && (
            <VuiText size="s">
              <VuiTextColor color="danger">{errorMessage}</VuiTextColor>
            </VuiText>
          )}
        </VuiFlexContainer>
      </div>
    );

    return size === "xs" ? <VuiTooltip tip={errorMessage}>{renderError}</VuiTooltip> : renderError;
  }

  const previewOverlay = allowPreview ? (
    <div className="vuiImage__previewOverlay" onClick={handlePreviewClick} role="button">
      <BiShow size={previewIconSize} />
      <VuiText size={previewTextSize}>
        <p>Preview</p>
      </VuiText>
    </div>
  ) : null;

  return (
    <>
      <VuiFlexContainer direction="column" className={classes} spacing="s">
        <VuiFlexItem grow={false}>
          <div className="vuiImage__imageWrapper">
            <img src={src} alt={alt} className="vuiImage__image" />
            {previewOverlay}
          </div>
        </VuiFlexItem>
        {caption && (
          <VuiFlexItem grow={false}>
            <VuiText size="s">{caption}</VuiText>
          </VuiFlexItem>
        )}
      </VuiFlexContainer>
      {allowPreview && (
        <VuiImagePreview
          src={src}
          alt={alt}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          title={previewTitle}
          description={previewDescription}
          caption={previewCaption}
          controls={controls}
        />
      )}
    </>
  );
};
