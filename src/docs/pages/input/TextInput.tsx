import { useState } from "react";
import { VuiTextInput } from "../../../lib";

export const TextInput = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <VuiTextInput
      id="textInput"
      autoComplete="email"
      name="text"
      placeholder="Type something…"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onSubmit={() => alert("Submit")}
    />
  );
};
