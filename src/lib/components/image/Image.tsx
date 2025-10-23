import { useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiImagePreview } from "./ImagePreview";
import { VuiIcon } from "../icon/Icon";
import { BiImage, BiError } from "react-icons/bi";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  isLoading?: boolean;
  isFailure?: boolean;
  allowPreview?: boolean; // allows image to be opened in a modal
};

export const VuiImage = ({
  src,
  alt,
  caption,
  className,
  isLoading = false,
  allowPreview = true,
  isFailure = false,
}: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewClick = () => {
    if (allowPreview) {
      setIsPreviewOpen(true);
    }
  };

  const imageClasses = classNames("vuiImage__image", className, {
    "vuiImage__image--clickable": allowPreview
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
      <div className={"vuiImage__placeholder vuiImage__placeholder--error"}>
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

  return (
    <>
      <VuiFlexContainer direction="column" spacing="s">
        <figure>
          <VuiFlexItem grow={false}>
            <div className="vuiImage__imageWrapper">
              <img src={src} alt={alt} className={imageClasses} onClick={handlePreviewClick} />
            </div>
          </VuiFlexItem>
          {caption && (
            <VuiFlexItem grow={false}>
              <VuiText size="s">
                <figcaption>{caption}</figcaption>
              </VuiText>
            </VuiFlexItem>
          )}
        </figure>
      </VuiFlexContainer>
      {allowPreview && (
        <VuiImagePreview src={src} alt={alt} isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      )}
    </>
  );
};
