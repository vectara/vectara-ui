import { useState } from "react";
import { VuiMarkdownEditor } from "../../../lib";

const initialValue = `# Support agent

You are a **support agent** for Vectara. Answer questions about the platform using only
the corpora you have been given access to.

## Rules

1. Cite every claim with the source document.
2. Never speculate about unreleased features.
3. If you can't answer, say so and offer to escalate.

### Escalation

Escalate by calling \`create_ticket\` with a short summary:

\`\`\`json
{ "priority": "normal", "summary": "..." }
\`\`\`

> Escalation is a last resort — try one clarifying question first.

---

See the [docs](https://docs.vectara.com) for the full policy.
`;

export const MarkdownEditor = () => {
  const [value, setValue] = useState(initialValue);

  return (
    <VuiMarkdownEditor
      label="Instructions"
      hint="Markdown is supported. Switch to Preview to see it rendered."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Describe how the agent should behave"
    />
  );
};
