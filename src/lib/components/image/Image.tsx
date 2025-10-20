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
export type CaptionPosition = "top" | "bottom" | "overlay";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  captionPosition?: CaptionPosition;
  size?: ImageSize;
  className?: string;
  isLoading?: boolean;
  allowPreview?: boolean;
  errorMessage?: string;
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

const directionMap = {
  top: "columnReverse",
  bottom: "column"
} as const;

const getFlexDirection = (position: keyof typeof directionMap) => {
  return directionMap[position];
};

const sizeConfig = {
  xs: { captionSize: "xs", skeletonRows: 2.5, previewTextSize: "xs", previewIconSize: 16 },
  s: { captionSize: "xs", skeletonRows: 2.5, previewTextSize: "s", previewIconSize: 16 },
  m: { captionSize: "m", skeletonRows: 3.25, previewTextSize: "m", previewIconSize: 24 },
  l: { captionSize: "m", skeletonRows: 3.25, previewTextSize: "m", previewIconSize: 24 },
  xl: { captionSize: "l", skeletonRows: 4.25, previewTextSize: "l", previewIconSize: 32 },
  full: { captionSize: "l", skeletonRows: 4.25, previewTextSize: "l", previewIconSize: 32 }
} as const;

export const VuiImage = ({
  src,
  alt,
  caption,
  captionPosition = "bottom",
  size = "m",
  className,
  isLoading = false,
  allowPreview = false,
  errorMessage,
  controls
}: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const classes = classNames("vuiImage", `vuiImage--${size}`, className);

  const { captionSize, skeletonRows, previewTextSize, previewIconSize } = sizeConfig[size];
  const getFlexDirectionWithCaption =
    captionPosition === "top" || captionPosition === "bottom" ? getFlexDirection(captionPosition) : undefined;

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
            <VuiText size={captionSize}>
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
      {captionPosition === "overlay" && caption ? (
        // Caption position: overlay
        <div className={classes}>
          <div className="vuiImage__imageWrapper">
            <img src={src} alt={alt} className="vuiImage__image" />
            {previewOverlay}
            <VuiText size={captionSize} className="vuiImage__captionOverlay">
              {caption}
            </VuiText>
          </div>
        </div>
      ) : (
        // Caption position: top | bottom
        <VuiFlexContainer direction={getFlexDirectionWithCaption} className={classes}>
          <VuiFlexItem grow={false}>
            <div className="vuiImage__imageWrapper">
              <img src={src} alt={alt} className="vuiImage__image" />
              {previewOverlay}
            </div>
          </VuiFlexItem>
          {caption && (
            <VuiFlexItem grow={false}>
              <VuiText size={captionSize}>{caption}</VuiText>
            </VuiFlexItem>
          )}
        </VuiFlexContainer>
      )}
      {allowPreview && (
        <VuiImagePreview
          src={src}
          alt={alt}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          controls={controls}
        />
      )}
    </>
  );
};
