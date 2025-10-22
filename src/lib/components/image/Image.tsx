import { useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiImagePreview } from "./ImagePreview";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  allowPreview?: boolean; // allows image to be opened in a modal
};

export const VuiImage = ({ src, alt, caption, className, allowPreview = true }: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewClick = () => {
    if (allowPreview) {
      setIsPreviewOpen(true);
    }
  };

  const imageClasses = classNames("vuiImage__image", className, {
    "vuiImage__image--clickable": allowPreview
  });

  return (
    <>
      <VuiFlexContainer direction="column" className="vuiImage" spacing="s">
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
