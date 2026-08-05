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
  const isEmpty = value.trim().length === 0;

  const heading = (
    <>
      {title}
      <span className="vuiMarkdownPreviewModal__wordCount">{wordCount === 1 ? "1 word" : `${wordCount} words`}</span>
    </>
  );

  return (
    <VuiModal
      className="vuiMarkdownPreviewModal"
      size={isEmpty ? "s" : "l"}
      title={heading}
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <div className="vuiMarkdownPreviewModal__body">
        {isEmpty ? (
          <VuiText size="m">
            <p>
              <VuiTextColor color="subdued">Nothing to preview yet.</VuiTextColor>
            </p>
          </VuiText>
        ) : (
          <VuiMarkdown size="m">{value}</VuiMarkdown>
        )}
      </div>
    </VuiModal>
  );
};
