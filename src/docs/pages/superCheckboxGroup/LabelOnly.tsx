import { useState } from "react";
import { VuiSuperCheckboxGroup, CheckboxConfig } from "../../../lib";

type Pizza = "pepperoni" | "mushrooms" | "jalapenos";

export const LabelOnly = () => {
  const [group, setGroup] = useState<CheckboxConfig<Pizza>[]>([
    {
      label: "Pepperoni",
      value: "pepperoni",
      checked: true,
      "data-testid": "pepperoni"
    },
    {
      label: "Mushrooms",
      value: "mushrooms",
      checked: false,
      "data-testid": "mushrooms"
    },
    {
      label: "Jalapeños",
      value: "jalapenos",
      checked: false,
      "data-testid": "jalapenos"
    }
  ]);

  const onChange = (value: string) => {
    setGroup(
      group.map((item) => ({
        ...item,
        checked: item.value === value ? !item.checked : item.checked
      }))
    );
  };

  return <VuiSuperCheckboxGroup group={group} onChange={onChange} />;
};
