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

export const SelectableOptionsList = () => {
  const [selectedOption, setSelectedOption] = useState(["a", "b"]);

  return (
    <VuiOptionsList
      isSelectable
      onSelectOption={(value: string) => {
        setSelectedOption((prev) => {
          const updated = prev.concat();
          const index = prev.findIndex((item) => item === value);

          if (index !== -1) {
            updated.splice(index, 1);
            return updated;
          }

          updated.push(value);
          return updated;
        });
      }}
      selected={selectedOption}
      options={options}
    />
  );
};
