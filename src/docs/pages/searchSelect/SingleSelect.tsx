import { useState } from "react";
import { VuiButtonSecondary, VuiSearchSelect } from "../../../lib";

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

export const SingleSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState(["a"]);

  return (
    <VuiSearchSelect
      title="Choose one or none"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onSelect={(value: string[]) => {
        setSelectedOptions(value);
      }}
      selectedOptions={selectedOptions}
      options={options}
      isMultiSelect={false}
    >
      <VuiButtonSecondary color="neutral" size="s">
        Meal preference
      </VuiButtonSecondary>
    </VuiSearchSelect>
  );
};
