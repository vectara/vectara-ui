import { useState } from "react";
import { VuiTextInput } from "../../../lib";

export const Large = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <VuiTextInput
      size="l"
      id="textInput"
      name="text"
      placeholder="Type something…"
      value={value}
      onSubmit={() => alert("Submit")}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
