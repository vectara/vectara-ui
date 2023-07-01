import { useState } from "react";
import { VuiNumberInput } from "../../../lib";

export const NumberInput = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <VuiNumberInput
      id="numberInput"
      max="1"
      min="0"
      step=".001"
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
    />
  );
};
