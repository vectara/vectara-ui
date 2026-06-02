import { useState } from "react";
import {
  VuiButtonTertiary,
  VuiComposer,
  ComposerSubmission,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiIconButton,
  VuiSpacer,
  VuiText,
  VuiTextColor
} from "../../../lib";
import { BiBulb, BiError } from "react-icons/bi";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

type SentMessage = {
  text: string;
  fileNames: string[];
};

export const Composer = () => {
  const [messages, setMessages] = useState<SentMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [rejectedFiles, setRejectedFiles] = useState<string[]>([]);
  const [skillCount, setSkillCount] = useState(0);

  const handleSubmit = ({ text, files }: ComposerSubmission) => {
    setMessages((prev) => [...prev, { text, fileNames: files.map((file) => file.name) }]);
    setRejectedFiles([]);

    // Simulate a streaming response so the Send button toggles to Cancel.
    setIsRunning(true);
    window.setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <>
      {messages.length > 0 && (
        <>
          {messages.map((message, index) => (
            <div key={index}>
              <VuiText>
                <p>{message.text || <VuiTextColor color="subdued">(no text)</VuiTextColor>}</p>
              </VuiText>
              {message.fileNames.length > 0 && (
                <VuiText size="s">
                  <p>
                    <VuiTextColor color="subdued">Attached: {message.fileNames.join(", ")}</VuiTextColor>
                  </p>
                </VuiText>
              )}
              <VuiSpacer size="xs" />
            </div>
          ))}
          <VuiSpacer size="m" />
        </>
      )}

      <VuiComposer
        placeholder="Ask a question, attach files, or press / for skills"
        isRunning={isRunning}
        onCancel={() => setIsRunning(false)}
        onSubmit={handleSubmit}
        enableHistory
        historyKey="vuiComposerDocs:history"
        canUploadFiles
        validateFile={(file) => (file.size > MAX_FILE_SIZE_BYTES ? "File exceeds 5 MB" : null)}
        onFilesRejected={(errors) => setRejectedFiles(errors.map((error) => error.file.name))}
        onShortcutKeys={{
          "/": (event, { value }) => {
            // Open the skill picker only when the composer is empty.
            if (value === "") {
              event.preventDefault();
              setSkillCount((count) => count + 1);
            }
          }
        }}
        leadingActions={
          <VuiFlexItem>
            <VuiFlexContainer alignItems="center" spacing="xxs">
              <VuiIconButton
                color="neutral"
                aria-label="Select skill"
                onClick={() => setSkillCount((count) => count + 1)}
                icon={
                  <VuiIcon>
                    <BiBulb />
                  </VuiIcon>
                }
              />
              {skillCount > 0 && (
                <VuiText size="s">
                  <VuiTextColor color="subdued">({skillCount})</VuiTextColor>
                </VuiText>
              )}
            </VuiFlexContainer>
          </VuiFlexItem>
        }
        footer={
          rejectedFiles.length > 0 ? (
            <>
              <VuiSpacer size="s" />
              <VuiFlexContainer alignItems="center" spacing="xs">
                <VuiFlexItem>
                  <VuiIcon size="s" color="danger">
                    <BiError />
                  </VuiIcon>
                </VuiFlexItem>
                <VuiFlexItem>
                  <VuiText size="s">
                    <p>
                      <VuiTextColor color="subdued">Could not attach: {rejectedFiles.join(", ")}</VuiTextColor>
                    </p>
                  </VuiText>
                </VuiFlexItem>
                <VuiFlexItem>
                  <VuiButtonTertiary noPadding color="primary" size="s" onClick={() => setRejectedFiles([])}>
                    Dismiss
                  </VuiButtonTertiary>
                </VuiFlexItem>
              </VuiFlexContainer>
            </>
          ) : undefined
        }
      />
    </>
  );
};
