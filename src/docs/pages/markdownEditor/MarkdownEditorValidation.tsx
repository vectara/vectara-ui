import { useState } from "react";
import { VuiMarkdownEditor } from "../../../lib";

export const MarkdownEditorValidation = () => {
  const [value, setValue] = useState("");

  return (
    <VuiMarkdownEditor
      label="Reminder"
      hint="Sent to the model before every turn."
      placeholder="Write a reminder..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      errors={value.trim() ? undefined : ["Reminder is required."]}
      isRequired
    />
  );
};
