import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import classNames from "classnames";
import { BiClipboard } from "react-icons/bi";
import { VuiButtonIcon } from "../button/ButtonIcon";
import { VuiIcon } from "../icon/Icon";
import { useEffect } from "react";

type Props = {
  language?: "js" | "ts" | "jsx" | "tsx";
  onCopy?: () => void;
  children?: string;
  fullHeight?: boolean;
};

export const VuiCode = ({ onCopy, language, fullHeight, children = "" }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const containerClasses = classNames("vuiCodeContainer", {
    "vuiCodeContainer--fullHeight": fullHeight
  });

  const classes = classNames("vuiCode", {
    [`language-${language}`]: language,
    "vuiCode--fullHeight": fullHeight
  });

  return (
    <div className={containerClasses}>
      <pre className="vuiCodePre">
        <code className={classes}>{children}</code>
      </pre>

      <VuiButtonIcon
        color="normal"
        icon={
          <VuiIcon>
            <BiClipboard size={20} />
          </VuiIcon>
        }
        aria-label="Copy to clipboard"
        className="vuiCodeCopyButton"
        onClick={() => {
          navigator.clipboard.writeText(children);
          if (onCopy) onCopy();
        }}
      />
    </div>
  );
};
