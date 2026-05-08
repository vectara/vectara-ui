import { useState } from "react";
import { VuiTextArea } from "../../../lib";

export const TextAreaAutoGrow = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <VuiTextArea
      id="autoGrowTextArea"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      autoGrow
      rows={1}
      fullWidth
      placeholder="Type a few lines — the textarea grows to fit its content"
    />
  );
};
