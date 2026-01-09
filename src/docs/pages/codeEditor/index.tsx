import { CodeEditor } from "./CodeEditor";

const CodeEditorSource = require("!!raw-loader!./CodeEditor");

export const codeEditor = {
  name: "Code Editor",
  path: "/codeEditor",
  examples: [
    {
      name: "CodeEditor",
      component: <CodeEditor />,
      source: CodeEditorSource.default.toString()
    }
  ]
};
