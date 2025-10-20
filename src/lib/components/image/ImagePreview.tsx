import classNames from "classnames";
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
  isLoading = false
}: Props) => {
  const classes = classNames("vuiImagePreview", `vuiImagePreview--${size}`, className);

  const captionSize = size === "xs" || size === "s" ? "xs" : size === "m" || size === "l" ? "m" : "l";
  const getFlexDirectionWithCaption =
    captionPosition === "top" || captionPosition === "bottom" ? getFlexDirection(captionPosition) : undefined;
  const skeletonRows = size === "xs" || size === "s" ? 2.5 : size === "m" || size === "l" ? 3.25 : 4.25;

  if (isLoading) {
    return (
      <div style={{ width: size === "full" ? sizeMap[size] : `${sizeMap[size]}px` }}>
        <VuiSkeleton rows={skeletonRows} />
      </div>
    );
  }

  return (
    <VuiFlexContainer direction={getFlexDirectionWithCaption} className={classes}>
      {captionPosition === "overlay" ? (
        <div className="vuiImagePreview__imageWrapper">
          <img src={src} alt={alt} className="vuiImagePreview__image" />

          <VuiText size={captionSize} className="vuiImagePreview__captionOverlay">
            {caption}
          </VuiText>
        </div>
      ) : (
        <>
          <VuiFlexItem grow={false}>
            <img src={src} alt={alt} className="vuiImagePreview__image" />
          </VuiFlexItem>
          {caption && (
            <VuiFlexItem grow={false}>
              <VuiText size={captionSize}>{caption}</VuiText>
            </VuiFlexItem>
          )}
        </>
      )}
    </VuiFlexContainer>
  );
};
