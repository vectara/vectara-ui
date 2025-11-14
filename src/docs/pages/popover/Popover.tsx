import { useState } from "react";
import {
  AnchorSide,
  VuiButtonSecondary,
  VuiFormGroup,
  VuiIcon,
  VuiOptionsList,
  VuiPopover,
  VuiSelect,
  VuiSpacer
} from "../../../lib";
import { BiCaretDown } from "react-icons/bi";

const options = [
  { value: "apples", label: "Apples" },
  { value: "windows", label: "Windows" },
  { value: "penguins", label: "Penguins" }
];

export const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("apples");
  const [anchorSide, setAnchorSide] = useState<AnchorSide>("right");

  return (
    <div key="popoverExample">
      <VuiFormGroup labelFor="anchorSideSelect" label="Anchor side">
        <VuiSelect
          id="anchorSideSelect"
          options={[
            { text: "Left", value: "left" },
            { text: "Right", value: "right" }
          ]}
          value={anchorSide}
          onChange={(event) => setAnchorSide(event.target.value as AnchorSide)}
        />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiPopover
        anchorSide={anchorSide}
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        header="Tribes"
        button={
          <VuiButtonSecondary
            color="neutral"
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
          onSelectOption={(value: string) => {
            setIsOpen(false);
            setSelectedOption(value);
          }}
          selected={selectedOption}
          options={options}
        />
      </VuiPopover>
    </div>
  );
};
