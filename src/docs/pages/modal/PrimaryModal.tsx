import { useState } from "react";
import {
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiModal,
  VuiSearchSelect,
  VuiSelect,
  VuiSpacer,
  VuiText
} from "../../../lib";
import { BiInfoCircle } from "react-icons/bi";

const options = [
  { value: "a", label: "Caffeine-free" },
  { value: "b", label: "Freeze dried" },
  { value: "c", label: "Gluten-free" },
  { value: "d", label: "Halal" },
  { value: "e", label: "High fiber" },
  { value: "f", label: "Kosher" },
  { value: "g", label: "Lactose-free" },
  { value: "h", label: "Low-carb" },
  { value: "i", label: "No nuts" },
  { value: "j", label: "Non-GMO" },
  { value: "k", label: "Sugar-free" },
  { value: "l", label: "Vegan" }
];

const sizeOptions = [
  { text: "Small", value: "s" },
  { text: "Medium", value: "m" },
  { text: "Large", value: "l" }
];

export const PrimaryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [size, setSize] = useState<"s" | "m" | "l">("s");

  return (
    <>
      <VuiSelect
        id="sizeOptions"
        options={sizeOptions}
        value={size}
        onChange={(event) => setSize(event.target.value as "s" | "m" | "l")}
      />

      <VuiSpacer size="m" />

      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(true)}>
        Open primary modal
      </VuiButtonPrimary>

      <VuiModal
        color="primary"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        icon={<BiInfoCircle />}
        title="FYI"
        size={size}
      >
        <VuiText>
          <p>I just thought you should know that your modal is showing.</p>
        </VuiText>

        <VuiSpacer size="m" />

        <VuiSearchSelect
          title="Select all that apply"
          isOpen={isPopoverOpen}
          setIsOpen={setIsPopoverOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSelect={() => undefined}
          selectedOptions={[]}
          options={options}
        >
          <VuiButtonSecondary color="neutral" size="s">
            Meal preference
          </VuiButtonSecondary>
        </VuiSearchSelect>

        <VuiSpacer size="l" />

        <VuiButtonSecondary color="primary">A no-op button for testing a11y</VuiButtonSecondary>
      </VuiModal>
    </>
  );
};
