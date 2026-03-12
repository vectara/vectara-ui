import { useState } from "react";
import { VuiSelect, VuiSpacer } from "../../../lib";

const options = [
  { text: "Johann Baptist Christophorus Apollinaris von Albertini", value: "albertini" },
  { text: "David Brin", value: "brin" },
  { text: "Cormac McCarthy", value: "mccarthy" },
  { text: "Bret Easton Ellis", value: "ellis" }
];

export const Select = () => {
  const [value, setValue] = useState("albertini");

  return (
    <>
      <VuiSelect
        id="optionsList1"
        size="s"
        options={options}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <VuiSpacer size="m" />

      <VuiSelect
        id="optionsList2"
        size="m"
        options={options}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <VuiSpacer size="m" />

      <VuiSelect
        id="optionsList3"
        size="l"
        options={options}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
