import { useState } from "react";
import { VuiTextArea } from "../../../lib";

export const TextArea = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <VuiTextArea
      id="textArea"
      onKeyDown={(e) => console.log("keydown", e)}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      fullWidth
    />
  );
};
