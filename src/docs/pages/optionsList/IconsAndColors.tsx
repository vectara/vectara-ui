import { useState } from "react";
import { OptionListItem, VuiIcon, VuiOptionsList } from "../../../lib";
import { BiCopy, BiEdit, BiTrash } from "react-icons/bi";

const options: OptionListItem<string>[] = [
  {
    value: "edit",
    label: "Edit",
    icon: (
      <VuiIcon>
        <BiEdit />
      </VuiIcon>
    )
  },
  {
    value: "copy",
    label: "Copy",
    icon: (
      <VuiIcon>
        <BiCopy />
      </VuiIcon>
    )
  },
  {
    value: "delete",
    label: "Delete",
    color: "danger",
    icon: (
      <VuiIcon>
        <BiTrash />
      </VuiIcon>
    )
  }
];

export const IconsAndColors = () => {
  const [selectedOption, setSelectedOption] = useState("a");

  return (
    <VuiOptionsList
      onSelectOption={(value: string) => {
        setSelectedOption(value);
        alert(`Selected ${value}`);
      }}
      selected={selectedOption}
      options={options}
    />
  );
};
