import { useState } from "react";
import { VuiSearchSelect, VuiBadge, VuiButtonSecondary, VuiIcon, VuiItemsInput } from "../../../lib";
import { BiCaretDown } from "react-icons/bi";
import "./index.scss";

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

export const WithBadges = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["a", "e"]);

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  const renderSelectedItems = (value: string) => {
    const option = options.find((opt) => opt.value === value);
    return (
      <VuiBadge
        key={value}
        color="primary"
        onClose={() => setSelectedOptions((prev) => prev.filter((prevValue) => prevValue !== value))}
        datatest-testid={`badge-${value}`}
      >
        {option?.label || value}
      </VuiBadge>
    );
  };

  const button =
    selectedOptions.length > 0 ? (
      <VuiItemsInput
        renderItem={renderSelectedItems}
        items={selectedOptions}
        onClearAll={handleClearAll}
        fullWidth
        data-testid="searchSelectButton"
      />
    ) : (
      <VuiButtonSecondary
        color="neutral"
        icon={
          <VuiIcon>
            <BiCaretDown />
          </VuiIcon>
        }
        iconSide="right"
        data-testid="searchSelectButton"
      >
        Filter options ({selectedOptions.length})
      </VuiButtonSecondary>
    );

  return (
    <VuiSearchSelect
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      options={options}
      selectedOptions={selectedOptions}
      onSelect={setSelectedOptions}
      title="Choose one or more"
      renderItem={renderSelectedItems}
      anchorSide="left"
      isMultiSelect
      data-testid="searchBox"
    >
      {button}
    </VuiSearchSelect>
  );
};
