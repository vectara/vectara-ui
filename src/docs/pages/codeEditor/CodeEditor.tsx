import { useState } from "react";
import { VuiCodeEditor } from "../../../lib";

const placeholder = `{
  "team": "engineering"
}`;

export const CodeEditor = () => {
  const [value, setValue] = useState<string>("");

  return (
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
  );
};
