import { useState } from "react";
import { VuiSuperCheckboxGroup, CheckboxConfig } from "../../../lib";

type Pizza = "pepperoni" | "mushrooms" | "jalapenos";

export const WithDescription = () => {
  const [group, setGroup] = useState<CheckboxConfig<Pizza>[]>([
    {
      label: "Pepperoni",
      description: "The best pizza topping",
      value: "pepperoni",
      checked: true,
      "data-testid": "pepperoni"
    },
    {
      label: "Mushrooms",
      description: "This one's for you if you're a fungi",
      value: "mushrooms",
      checked: false,
      "data-testid": "mushrooms"
    },
    {
      label: "Jalapeños",
      description: "Muy caliente",
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
