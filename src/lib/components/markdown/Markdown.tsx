import classNames from "classnames";
import Markdown from "markdown-to-jsx";
import { VuiText } from "../typography/Text";
import { TEXT_SIZE } from "../typography/types";

type Props = {
  children?: string;
  className?: string;
  size?: (typeof TEXT_SIZE)[number];
};

export const VuiMarkdown = ({ children = "", className, size = "s" }: Props) => (
  <VuiText size={size} className={classNames("vuiMarkdown", className)}>
    <Markdown
      options={{
        disableParsingRawHTML: true,
        forceBlock: true,
        overrides: {
          a: {
            props: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        }
      }}
    >
      {children}
    </Markdown>
  </VuiText>
);
