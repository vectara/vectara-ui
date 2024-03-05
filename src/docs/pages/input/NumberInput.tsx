import { useState } from "react";
import { VuiNumberInput } from "../../../lib";

export const NumberInput = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <VuiNumberInput
      id="numberInput"
      name="number"
      placeholder="Type something…"
      max={1}
      min={-10}
      step={0.001}
      value={value}
      onChange={(value) => setValue(value)}
      onSubmit={() => alert("Submit")}
    />
  );
};
