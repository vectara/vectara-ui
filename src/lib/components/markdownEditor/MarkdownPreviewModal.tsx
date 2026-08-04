import { ReactNode } from "react";
import { VuiMarkdown } from "../markdown/Markdown";
import { VuiModal } from "../modal/Modal";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { countWords } from "./countWords";

type Props = {
  title: ReactNode;
  value: string;
  isOpen: boolean;
  onClose: () => void;
  "data-testid"?: string;
};

export const VuiMarkdownPreviewModal = ({ title, value, isOpen, onClose, ...rest }: Props) => {
  const wordCount = countWords(value);

  const heading = (
    <>
      {title}
      <span className="vuiMarkdownPreviewModal__wordCount">{wordCount === 1 ? "1 word" : `${wordCount} words`}</span>
    </>
  );

  return (
    <VuiModal
      className="vuiMarkdownPreviewModal"
      size="l"
      title={heading}
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <div className="vuiMarkdownPreviewModal__body">
        {value.trim() ? (
          <VuiMarkdown size="m">{value}</VuiMarkdown>
        ) : (
          <VuiText size="m">
            <p>
              <VuiTextColor color="subdued">Nothing to preview yet.</VuiTextColor>
            </p>
          </VuiText>
        )}
      </div>
    </VuiModal>
  );
};
