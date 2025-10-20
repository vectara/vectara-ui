import classNames from "classnames";
import { BiShow } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiSkeleton } from "../skeleton/Skeleton";

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

export const VuiImagePreview = ({
  src,
  alt,
  caption,
  captionPosition = "bottom",
  size = "m",
  className,
  isLoading = false,
  allowPreview = false
}: Props) => {
  const classes = classNames("vuiImagePreview", `vuiImagePreview--${size}`, className);

  const captionSize = size === "xs" || size === "s" ? "xs" : size === "m" || size === "l" ? "m" : "l";
  const getFlexDirectionWithCaption =
    captionPosition === "top" || captionPosition === "bottom" ? getFlexDirection(captionPosition) : undefined;
  const skeletonRows = size === "xs" || size === "s" ? 2.5 : size === "m" || size === "l" ? 3.25 : 4.25;
  const previewTextSize = size === "xs" ? "xs" : size === "s" ? "s" : size === "m" || size === "l" ? "m" : "l";
  const previewIconSize = size === "xs" || size === "s" ? 16 : size === "m" || size === "l" ? 24 : 32;

  if (isLoading) {
    return (
      <div style={{ width: size === "full" ? sizeMap[size] : `${sizeMap[size]}px` }}>
        <VuiSkeleton rows={skeletonRows} />
      </div>
    );
  }

  // Caption position: overlay
  if (captionPosition === "overlay") {
    return (
      <div className={classes}>
        <div className="vuiImagePreview__imageWrapper">
          <img src={src} alt={alt} className="vuiImagePreview__image" />
          {allowPreview && (
            <div className="vuiImagePreview__previewOverlay">
              <BiShow size={previewIconSize} />
              <VuiText size={previewTextSize}>
                <p>Preview</p>
              </VuiText>
            </div>
          )}
          <VuiText size={captionSize} className="vuiImagePreview__captionOverlay">
            {caption}
          </VuiText>
        </div>
      </div>
    );
  }

  // Caption positions: top, bottom
  return (
    <VuiFlexContainer direction={getFlexDirectionWithCaption} className={classes}>
      <VuiFlexItem grow={false}>
        <div className="vuiImagePreview__imageWrapper">
          <img src={src} alt={alt} className="vuiImagePreview__image" />
          {allowPreview && (
            <div className="vuiImagePreview__previewOverlay">
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
  );
};
