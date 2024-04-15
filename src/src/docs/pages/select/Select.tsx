import { useState } from "react";
import { VuiSelect } from "../../../lib";

const options = [
  { text: "David Brin", value: "brin" },
  { text: "Cormac McCarthy", value: "mccarthy" },
  { text: "Bret Easton Ellis", value: "ellis" }
];

export const Select = () => {
  const [value, setValue] = useState("ellis");
  return (
    <VuiSelect id="optionsList1" options={options} value={value} onChange={(event) => setValue(event.target.value)} />
  );
};
