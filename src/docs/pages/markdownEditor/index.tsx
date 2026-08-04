import { MarkdownEditor } from "./MarkdownEditor";
import { MarkdownEditorValidation } from "./MarkdownEditorValidation";

const MarkdownEditorSource = require("!!raw-loader!./MarkdownEditor");
const MarkdownEditorValidationSource = require("!!raw-loader!./MarkdownEditorValidation");

export const markdownEditor = {
  name: "Markdown Editor",
  path: "/markdownEditor",
  examples: [
    {
      name: "Markdown Editor",
      component: <MarkdownEditor />,
      source: MarkdownEditorSource.default.toString()
    },
    {
      name: "Required with validation",
      component: <MarkdownEditorValidation />,
      source: MarkdownEditorValidationSource.default.toString()
    }
  ]
};
