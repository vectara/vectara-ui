import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiIcon } from "../icon/Icon";
import { BiImage, BiError } from "react-icons/bi";
import { VuiTextColor } from "../typography/TextColor";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isFailure?: boolean;
  aspectRatio?: string;
};

export const VuiImage = ({
  src,
  alt,
  caption,
  className,
  onClick,
  isLoading = false,
  isFailure = false,
  aspectRatio
}: Props) => {
  const imageWrapperClasses = classNames("vuiImage__imageWrapper", className, {
    "vuiImage__imageWrapper--clickable": onClick
  });

  if (isLoading) {
    return (
      <div className="vuiImage__placeholder">
        <div className="vuiImage__iconWrapper">
          <VuiIcon color="subdued" size="xxxl">
            <BiImage />
          </VuiIcon>
        </div>
      </div>
    );
  }

  if (isFailure) {
    return (
      <div className="vuiImage__placeholder vuiImage__placeholder--error">
        <VuiFlexContainer direction="column" alignItems="center" justifyContent="center" spacing="s">
          <VuiFlexItem grow={false}>
            <div className="vuiImage__iconWrapper">
              <VuiIcon size="m" color="danger">
                <BiError />
              </VuiIcon>
            </div>
          </VuiFlexItem>
          <VuiFlexItem grow={false}>
            <VuiText size="s" align="center">
              <p>Missing image</p>
            </VuiText>
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    );
  }

  const WrapperEl = onClick ? "button" : "div";

  return (
    <VuiFlexContainer direction="column" spacing="s">
      <figure>
        <VuiFlexItem grow={false}>
          <WrapperEl className={imageWrapperClasses} onClick={onClick}>
            <img src={src} alt={alt} className="vuiImage__image" style={{ aspectRatio }} />
          </WrapperEl>
        </VuiFlexItem>

        {caption && (
          <VuiFlexItem grow={false}>
            <VuiText size="s" className="vuiImage__caption">
              <figcaption>
                <VuiTextColor color="subdued">{caption}</VuiTextColor>
              </figcaption>
            </VuiText>
          </VuiFlexItem>
        )}
      </figure>
    </VuiFlexContainer>
  );
};
