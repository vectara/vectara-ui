import { useState } from "react";
import { VuiTextInput } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Sizes = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <>
      <Subsection title="Large">
        <VuiTextInput
          size="l"
          id="textInput"
          name="text"
          placeholder="Type something…"
          value={value}
          onSubmit={() => alert("Submit")}
          onChange={(event) => setValue(event.target.value)}
        />
      </Subsection>

      <Subsection title="Medium">
        <VuiTextInput
          size="m"
          id="textInput"
          name="text"
          placeholder="Type something…"
          value={value}
          onSubmit={() => alert("Submit")}
          onChange={(event) => setValue(event.target.value)}
        />
      </Subsection>

      <Subsection title="Small">
        <VuiTextInput
          size="s"
          id="textInput"
          name="text"
          placeholder="Type something…"
          value={value}
          onSubmit={() => alert("Submit")}
          onChange={(event) => setValue(event.target.value)}
        />
      </Subsection>
    </>
  );
};
