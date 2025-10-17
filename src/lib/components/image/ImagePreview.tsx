import { useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiSkeleton } from "../skeleton/Skeleton";
import { VuiTextColor } from "../typography/TextColor";

export type ImageSize = "xs" | "s" | "m" | "l";
export type CaptionPosition = "top" | "bottom" | "right" | "left" | "overlay";
export type DescriptionPosition = "top" | "bottom" | "right" | "left";

type Props = {
  src: string;
  id?: string;
  alt?: string;
  caption?: string;
  captionPosition?: CaptionPosition;
  description?: string;
  descriptionPosition?: DescriptionPosition;
  size?: ImageSize;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
};

const getDescriptionLayoutDirection = (
  position: DescriptionPosition
): "column" | "columnReverse" | "row" | "rowReverse" => {
  switch (position) {
    case "top":
      return "columnReverse";
    case "bottom":
      return "column";
    case "left":
      return "rowReverse";
    case "right":
      return "row";
  }
};

const getCaptionLayoutDirection = (
  position: Omit<CaptionPosition, "overlay">
): "column" | "columnReverse" | "row" | "rowReverse" => {
  switch (position) {
    case "top":
      return "columnReverse";
    case "bottom":
      return "column";
    case "left":
      return "rowReverse";
    case "right":
      return "row";
  }
  return "column";
};

export const VuiImagePreview = ({
  src,
  alt,
  caption,
  captionPosition = "bottom",
  description,
  descriptionPosition = "right",
  size = "m",
  className,
  isLoading,
  onClick,
  onError: onErrorProp,
  onLoad: onLoadProp,
  ...rest
}: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoaded(true);
    onLoadProp?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    onErrorProp?.(e);
  };

  const classes = classNames("vuiImagePreview", `vuiImagePreview--${size}`, className);

  const imageClasses = classNames("vuiImagePreview__image", {
    "vuiImagePreview__image--loaded": imageLoaded,
    "vuiImagePreview__image--clickable": onClick
  });

  // Render image with caption
  const renderImageWithCaption = () => {
    if (captionPosition === "overlay") {
      return (
        <div className="vuiImagePreview__imageWrapper">
          {!imageLoaded && !imageError && isLoading && (
            <VuiSkeleton
              rows={1}
              height={size === "xs" ? "100px" : size === "s" ? "200px" : size === "m" ? "400px" : "600px"}
            />
          )}
          <img
            src={src}
            alt={alt}
            className={imageClasses}
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={handleLoad}
            onError={handleError}
            onClick={onClick}
            {...rest}
          />
          {caption && imageLoaded && (
            <div className="vuiImagePreview__captionOverlay">
              <p>{caption}</p>
            </div>
          )}
          {imageError && (
            <div className="vuiImagePreview__error">
              <VuiTextColor color="danger">Failed to load image</VuiTextColor>
            </div>
          )}
        </div>
      );
    }

    // For top/bottom/left/right caption positioning
    return (
      <VuiFlexContainer
        direction={getCaptionLayoutDirection(captionPosition)}
        spacing="xs"
        alignItems={captionPosition === "left" || captionPosition === "right" ? "center" : "stretch"}
      >
        <VuiFlexItem grow={false}>
          <div className="vuiImagePreview__imageContainer">
            {!imageLoaded && !imageError && isLoading && (
              <VuiSkeleton
                rows={1}
                height={size === "xs" ? "100px" : size === "s" ? "200px" : size === "m" ? "400px" : "600px"}
              />
            )}
            <img
              src={src}
              alt={alt}
              className={imageClasses}
              style={{ display: imageLoaded ? "block" : "none" }}
              onLoad={handleLoad}
              onError={handleError}
              onClick={onClick}
              {...rest}
            />
            {imageError && (
              <div className="vuiImagePreview__error">
                <VuiTextColor color="danger">Failed to load image</VuiTextColor>{" "}
              </div>
            )}
          </div>
        </VuiFlexItem>
        {caption && (
          <VuiFlexItem grow={false}>
            <VuiText size="s">{caption}</VuiText>
          </VuiFlexItem>
        )}
      </VuiFlexContainer>
    );
  };

  // When description exists, use description position to layout
  if (description) {
    return (
      <div className={classes}>
        <VuiFlexContainer
          direction={getDescriptionLayoutDirection(descriptionPosition)}
          spacing="m"
          alignItems={descriptionPosition === "left" || descriptionPosition === "right" ? "start" : "stretch"}
        >
          <VuiFlexItem grow={false}>{renderImageWithCaption()}</VuiFlexItem>
          <VuiFlexItem>
            <VuiText>{description}</VuiText>
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    );
  }

  // When no description, center the image
  return (
    <div className={classes}>
      <VuiFlexContainer justifyContent="center" alignItems="center">
        <VuiFlexItem grow={false}>{renderImageWithCaption()}</VuiFlexItem>
      </VuiFlexContainer>
    </div>
  );
};
