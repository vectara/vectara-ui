import { useState } from "react";
import { VuiSuperRadioGroup, RadioButtonConfig } from "../../../lib";

type Pizza = "pepperoni" | "mushrooms" | "jalapenos";

export const LabelOnly = () => {
  const [group, setGroup] = useState<RadioButtonConfig<Pizza>[]>([
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
        checked: item.value === value
      }))
    );
  };

  return <VuiSuperRadioGroup group={group} onChange={onChange} />;
};
