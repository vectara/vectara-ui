import { useState } from "react";
import { VuiButtonSecondary, VuiIcon, VuiOptionsList, VuiPopover } from "../../../lib";
import { BiCaretDown } from "react-icons/bi";

const options = [
  { value: "apples", label: "Apples" },
  { value: "windows", label: "Windows" },
  { value: "penguins", label: "Penguins" }
];

export const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("apples");

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <VuiButtonSecondary
          color="normal"
          size="s"
          icon={
            <VuiIcon size="m">
              <BiCaretDown />
            </VuiIcon>
          }
        >
          Tribe: {selectedOption}
        </VuiButtonSecondary>
      }
    >
      <VuiOptionsList
        isSelectable
        isScrollable
        onSelectOption={(value) => {
          setIsOpen(false);
          setSelectedOption(value);
        }}
        selectedOption={selectedOption}
        options={options}
      />
    </VuiPopover>
  );
};
