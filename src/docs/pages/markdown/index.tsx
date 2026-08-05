import { Markdown } from "./Markdown";
import { MarkdownPreviewModal } from "./MarkdownPreviewModal";
import { MarkdownEditing } from "./MarkdownEditing";

const MarkdownSource = require("!!raw-loader!./Markdown");
const MarkdownPreviewModalSource = require("!!raw-loader!./MarkdownPreviewModal");
const MarkdownEditingSource = require("!!raw-loader!./MarkdownEditing");

export const markdown = {
  name: "Markdown",
  path: "/markdown",
  examples: [
    {
      name: "Markdown",
      component: <Markdown />,
      source: MarkdownSource.default.toString()
    },
    {
      name: "Preview modal",
      component: <MarkdownPreviewModal />,
      source: MarkdownPreviewModalSource.default.toString()
    },
    {
      name: "Composing an editing UI",
      component: <MarkdownEditing />,
      source: MarkdownEditingSource.default.toString()
    }
  ]
};
