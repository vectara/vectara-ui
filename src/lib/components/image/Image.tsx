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
  bottom: "column",
  left: "rowReverse",
  right: "row"
} as const;

const getFlexDirection = (position: keyof typeof directionMap) => {
  return directionMap[position];
};

export const VuiImage = ({
  src,
  alt,
  caption,
  captionPosition = "bottom",
  size = "m",
  className,
  isLoading = false,
  allowPreview = false,
  errorMessage
}: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const classes = classNames("vuiImage", `vuiImage--${size}`, className);

  const captionSize = size === "xs" || size === "s" ? "xs" : size === "m" || size === "l" ? "m" : "l";
  const getFlexDirectionWithCaption =
    captionPosition === "top" || captionPosition === "bottom" ? getFlexDirection(captionPosition) : undefined;
  const skeletonRows = size === "xs" || size === "s" ? 2.5 : size === "m" || size === "l" ? 3.25 : 4.25;
  const previewTextSize = size === "xs" ? "xs" : size === "s" ? "s" : size === "m" || size === "l" ? "m" : "l";
  const previewIconSize = size === "xs" || size === "s" ? 16 : size === "m" || size === "l" ? 24 : 32;

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
              <VuiTextColor color="danger">{error}</VuiTextColor>
            </VuiText>
          )}
        </VuiFlexContainer>
      </div>
    );

    return size === "xs" ? <VuiTooltip tip={error}>{renderError}</VuiTooltip> : renderError;
  }

  return (
    <>
      {captionPosition === "overlay" ? (
        // Caption poistion: overlay
        <div className={classes}>
          <div className="vuiImage__imageWrapper">
            <img src={src} alt={alt} className="vuiImage__image" />
            {allowPreview && (
              <div className="vuiImage__previewOverlay" onClick={handlePreviewClick}>
                <BiShow size={previewIconSize} />
                <VuiText size={previewTextSize}>
                  <p>Preview</p>
                </VuiText>
              </div>
            )}
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
              {allowPreview && (
                <div className="vuiImage__previewOverlay" onClick={handlePreviewClick}>
                  <BiShow size={previewIconSize} />
                  <VuiText size={previewTextSize}>
                    <p>Preview</p>
                  </VuiText>
                </div>
              )}
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
        <VuiImagePreview src={src} alt={alt} isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      )}
    </>
  );
};
