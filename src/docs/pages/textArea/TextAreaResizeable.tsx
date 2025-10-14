import { useState } from "react";
import { VuiTextArea } from "../../../lib";

export const TextAreaResizeable = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <VuiTextArea
      id="resizeableTextArea"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      resizable
      fullWidth
      placeholder="This textarea can be resized vertically"
    />
  );
};
