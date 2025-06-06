import { useState } from "react";
import { VuiFormGroup, VuiSearchSelect, VuiTextInput } from "../../../lib";

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

const getOptionForValue = (value: string) => {
  const option = options.find((option) => option.value === value);
  return option ? option.label : "";
};

const humanizeOptions = (values: string[]) => {
  if (values.length === 0) {
    return "None selected";
  }

  if (values.length === 1) {
    return getOptionForValue(values[0]);
  }

  if (values.length === 2) {
    return `${getOptionForValue(values[0])} and ${getOptionForValue(values[1])}`;
  }

  return `${values
    .slice(0, -1)
    .map((value) => getOptionForValue(value))
    .join(", ")}, and ${getOptionForValue(values[values.length - 1])}`;
};

export const FormGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <VuiFormGroup label="Search select" labelFor="searchSelect">
      <VuiSearchSelect
        title="Choose one or more"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSelect={(value: string[]) => {
          setSelectedOptions(value);
        }}
        selectedOptions={selectedOptions}
        options={options}
        anchorSide="left"
      >
        <VuiTextInput
          fullWidth
          color="neutral"
          id="searchSelect"
          value={humanizeOptions(selectedOptions)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </VuiSearchSelect>
    </VuiFormGroup>
  );
};
