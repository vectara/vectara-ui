import { useState } from "react";
import { VuiButtonSecondary, VuiMarkdownPreviewModal } from "../../../lib";

const value = `## Escalation policy

Escalate a ticket when **any** of the following is true:

- The customer has replied more than twice without resolution.
- The request touches billing or data deletion.
- You are unsure whether the answer is correct.

Otherwise, answer directly and cite the source document.
`;

export const MarkdownPreviewModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonSecondary color="primary" onClick={() => setIsOpen(true)}>
        Open preview
      </VuiButtonSecondary>

      <VuiMarkdownPreviewModal title="Instructions" value={value} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
