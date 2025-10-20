import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";

export type ImageSize = "xs" | "s" | "m" | "l" | "xl" | "full";
export type CaptionPosition = "top" | "bottom" | "overlay";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  captionPosition?: CaptionPosition;
  size?: ImageSize;
  className?: string;
};

const directionMap = {
  top: "columnReverse",
  bottom: "column",
  left: "rowReverse",
  right: "row"
} as const;

const getFlexDirection = (position: keyof typeof directionMap) => {
  return directionMap[position];
};

export const VuiImagePreview = ({ src, alt, caption, captionPosition = "bottom", size = "m", className }: Props) => {
  const classes = classNames("vuiImagePreview", `vuiImagePreview--${size}`, className);

  const captionSize = size === "xs" || size === "s" ? "xs" : size === "m" || size === "l" ? "m" : "l";
  const getFlexDirectionWithCaption =
    captionPosition === "top" || captionPosition === "bottom" ? getFlexDirection(captionPosition) : undefined;

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
