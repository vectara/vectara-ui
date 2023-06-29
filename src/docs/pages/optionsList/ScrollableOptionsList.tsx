import { useState } from "react";
import { VuiOptionsList } from "../../../lib";

const options = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
  { value: "c", label: "C" },
  { value: "d", label: "D" },
  { value: "e", label: "E" },
  { value: "f", label: "F" },
  { value: "g", label: "G" },
  { value: "h", label: "H" },
  { value: "i", label: "I" },
  { value: "j", label: "J" },
  { value: "k", label: "K" },
  { value: "l", label: "L" }
];

export const ScrollableOptionsList = () => {
  const [selectedOption, setSelectedOption] = useState("a");

  return (
    <VuiOptionsList
      isSelectable
      isScrollable
      onSelectOption={(value) => {
        setSelectedOption(value);
      }}
      selectedOption={selectedOption}
      options={options}
    />
  );
};
