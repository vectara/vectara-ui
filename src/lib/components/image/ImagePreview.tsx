import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiButtonPrimary } from "../button/ButtonPrimary";
import { VuiSpacer } from "../spacer/Spacer";

type Props = {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
  description?: string;
  caption?: string;
};

export const VuiImagePreview = ({
  src,
  alt,
  isOpen,
  onClose,
  className,
  title,
  description,
  caption
}: Props) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  const showInfo = !!(title || description);

  // Return focus on unmount
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setIsDescriptionExpanded(false);
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      onClose?.();
    }, 0);
  };

  const baseClasses = classNames("vuiImagePreview", className);

  return (
    <VuiPortal>
      {isOpen && (
        <VuiScreenBlock onClick={onCloseDelayed}>
          <div className={baseClasses}>
            <FocusOn
              onEscapeKey={onCloseDelayed}
              onClickOutside={onCloseDelayed}
              returnFocus={false}
              autoFocus={isOpen}
            >
              <div className="vuiImagePreview__container">
                <div className="vuiImagePreview__closeButton">
                  <VuiIconButton
                    aria-label="Close preview"
                    onClick={onCloseDelayed}
                    color="neutral"
                    icon={
                      <VuiIcon size="l" color="empty">
                        <BiX />
                      </VuiIcon>
                    }
                  />
                </div>

                <div className="vuiImagePreview__imageContainer">
                  <img src={src} alt={alt} className="vuiImagePreview__image" draggable={false} />
                </div>

                {showInfo && (
                  <div className="vuiImagePreview__infoOverlay">
                    {title && (
                      <VuiText>
                        <VuiTextColor color="empty">
                          <h3>{title}</h3>
                        </VuiTextColor>
                      </VuiText>
                    )}
                    {description && (
                      <>
                        <VuiText
                          className={!isDescriptionExpanded ? "vuiImagePreview__infoDescriptionText--collapsed" : ""}
                        >
                          <VuiTextColor color="empty">{description}</VuiTextColor>
                        </VuiText>
                        <VuiSpacer size="s" />
                        {description.length > 150 && (
                          <VuiButtonPrimary color="primary" onClick={() => setIsDescriptionExpanded((prev) => !prev)}>
                            {isDescriptionExpanded ? "Show less" : "Show more"}
                          </VuiButtonPrimary>
                        )}
                      </>
                    )}
                  </div>
                )}

                {caption && (
                  <div className="vuiImagePreview__caption">
                    <VuiText size="xs">
                      <VuiTextColor color="empty">{caption}</VuiTextColor>
                    </VuiText>
                  </div>
                )}
              </div>
            </FocusOn>
          </div>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
