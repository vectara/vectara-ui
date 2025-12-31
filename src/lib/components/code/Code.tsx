import { useEffect, useRef, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiClipboard, BiFullscreen, BiX } from "react-icons/bi";
import classNames from "classnames";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { CodeLanguage } from "./types";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiPortal } from "../portal/Portal";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiFlexItem } from "../flex/FlexItem";
import { getOverlayProps } from "../../utils/getOverlayProps";
import { VuiText } from "../typography/Text";

type Props = {
  language?: CodeLanguage;
  isFullscreenEnabled?: boolean;
  isCopyEnabled?: boolean;
  children?: string;
  fullHeight?: boolean;
  onCopy?: () => void;
  "data-testid"?: string;
};

// PrismJS clears highlighting when language-none is set.
export const VuiCode = ({
  onCopy,
  isFullscreenEnabled = true,
  isCopyEnabled = true,
  language = "none",
  fullHeight,
  children = "",
  ...rest
}: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      // Skip highlighting for very large code blocks to avoid performance issues.
      const contentLength = children.trim().length;
      if (contentLength > 20000) return;

      Prism.highlightElement(codeRef.current);
    }
  }, [children, language, isFullscreen]);

  const containerClasses = classNames("vuiCodeContainer", {
    "vuiCodeContainer--fullHeight": fullHeight
  });

  const classes = classNames("vuiCode", `language-${language}`, {
    "vuiCode--fullHeight": fullHeight
  });

  const testId = rest["data-testid"];

  const actions = (isFullscreenEnabled || isCopyEnabled) && (
    <VuiFlexContainer className="vuiCodeActions" spacing="xxs">
      {isFullscreenEnabled && (
        <VuiIconButton
          color="neutral"
          size="xs"
          icon={
            <VuiIcon>
              <BiFullscreen />
            </VuiIcon>
          }
          aria-label="Full screen"
          onClick={() => {
            setIsFullscreen(!isFullscreen);
          }}
        />
      )}

      {isCopyEnabled && (
        <VuiIconButton
          color="neutral"
          size="xs"
          icon={
            <VuiIcon>
              <BiClipboard />
            </VuiIcon>
          }
          aria-label="Copy to clipboard"
          onClick={async () => {
            await copyToClipboard(children);
            if (onCopy) onCopy();
          }}
        />
      )}
    </VuiFlexContainer>
  );

  const code = (
    <pre className="vuiCodePre">
      <code className={classes} ref={codeRef}>
        {children}
      </code>
    </pre>
  );

  return (
    <div className={containerClasses} {...rest}>
      {code}

      {actions}

      {/* Expose this for tests to assert against. */}
      {testId && (
        <div data-testid={`${testId}-hidden`} hidden>
          {children}
        </div>
      )}

      <VuiPortal>
        {isFullscreen && (
          <VuiScreenBlock>
            <FocusOn
              onEscapeKey={() => {
                setIsFullscreen(false);
              }}
            >
              <div className="vuiCodeFullscreen" {...getOverlayProps("fullscreenCodeTitle")}>
                <VuiFlexContainer
                  alignItems="center"
                  justifyContent="spaceBetween"
                  className="vuiCodeFullscreen__actions"
                >
                  <VuiFlexItem>
                    <VuiText>
                      <p id="fullscreenCodeTitle">
                        <strong>Code</strong>
                      </p>
                    </VuiText>
                  </VuiFlexItem>

                  <VuiFlexItem>
                    <VuiFlexContainer spacing="xxs">
                      {isCopyEnabled && (
                        <VuiIconButton
                          color="neutral"
                          size="m"
                          icon={
                            <VuiIcon>
                              <BiClipboard />
                            </VuiIcon>
                          }
                          aria-label="Copy to clipboard"
                          onClick={async () => {
                            await copyToClipboard(children);
                            if (onCopy) onCopy();
                          }}
                          tooltip={{
                            position: "bottom-end"
                          }}
                        />
                      )}
                      <VuiIconButton
                        className="vuiCodeFullscreen__closeButton"
                        color="neutral"
                        size="m"
                        icon={
                          <VuiIcon>
                            <BiX />
                          </VuiIcon>
                        }
                        aria-label="Exit fullscreen code"
                        onClick={() => setIsFullscreen(false)}
                        tooltip={{
                          position: "bottom-end"
                        }}
                      />
                    </VuiFlexContainer>
                  </VuiFlexItem>
                </VuiFlexContainer>

                {code}
              </div>
            </FocusOn>
          </VuiScreenBlock>
        )}
      </VuiPortal>
    </div>
  );
};
