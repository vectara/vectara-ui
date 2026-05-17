import { useState } from "react";
import * as monacoTypes from "monaco-editor/esm/vs/editor/editor.api";
import { VuiCodeEditor, VuiSpacer } from "../../../lib";

const placeholder = `{
  "team": "engineering"
}`;

const FIELDS = ["doc.title", "doc.author", "doc.date", "doc.tags"];
const OPERATORS = ["=", "!=", ">", "<", "LIKE", "AND", "OR"];

const completionItemProvider: monacoTypes.languages.CompletionItemProvider = {
  triggerCharacters: ["."],
  provideCompletionItems: (model, position) => {
    const word = model.getWordUntilPosition(position);
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    };

    const suggestions: Array<monacoTypes.languages.CompletionItem> = [
      ...FIELDS.map((field) => ({
        label: field,
        kind: monacoTypes.languages.CompletionItemKind.Field,
        insertText: field,
        range
      })),
      ...OPERATORS.map((operator) => ({
        label: operator,
        kind: monacoTypes.languages.CompletionItemKind.Operator,
        insertText: operator,
        range
      }))
    ];

    return { suggestions };
  }
};

export const CodeEditor = () => {
  const [value, setValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <VuiCodeEditor
        resizable
        language="json"
        onChange={(newValue?: string) => {
          setValue(newValue ?? "");
        }}
        placeholder={placeholder}
        value={value}
        data-testid="codeEditor"
      />

      <VuiSpacer size="m" />

      <VuiCodeEditor
        language="filter"
        onChange={(newValue?: string) => {
          setFilter(newValue ?? "");
        }}
        placeholder='doc.title LIKE "%intro%"'
        value={filter}
        completionItemProvider={completionItemProvider}
        quickSuggestions
        data-testid="filterEditor"
      />
    </>
  );
};
