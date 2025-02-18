import { useEffect, useState } from "react";
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
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { CodeLanguage } from "./types";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiPortal } from "../portal/Portal";
import { copyToClipboard } from "../../utils/copyToClipboard";

type Props = {
  language?: CodeLanguage;
  onCopy?: () => void;
  isFullscreenEnabled?: boolean;
  children?: string;
  fullHeight?: boolean;
  "data-testid"?: string;
};

// PrismJS clears highlighting when language-none is set.
export const VuiCode = ({
  onCopy,
  isFullscreenEnabled = true,
  language = "none",
  fullHeight,
  children = "",
  ...rest
}: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [children, language, isFullscreen]);

  const containerClasses = classNames("vuiCodeContainer", {
    "vuiCodeContainer--fullHeight": fullHeight
  });

  const classes = classNames("vuiCode", `language-${language}`, {
    "vuiCode--fullHeight": fullHeight
  });

  const testId = rest["data-testid"];

  const actions = (
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
    </VuiFlexContainer>
  );

  const code = (
    <pre className="vuiCodePre">
      <code className={classes}>{children}</code>
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
          <FocusOn
            onEscapeKey={() => {
              setIsFullscreen(false);
            }}
          >
            <div className="vuiCodeFullscreen">
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
              />
              {code}
            </div>
          </FocusOn>
        )}
      </VuiPortal>
    </div>
  );
};
