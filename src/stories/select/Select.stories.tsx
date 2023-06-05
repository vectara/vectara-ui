import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiSelect } from "../../ui";

export default {
  title: "Forms/Select",
  component: VuiSelect
} as ComponentMeta<typeof VuiSelect>;

export const Select: ComponentStory<typeof VuiSelect> = (args) => <VuiSelect {...args} />;

Select.args = {
  options: [
    {
      text: "Unicorns",
      value: "unicorns"
    },
    {
      text: "Narwhals",
      value: "narwhals"
    },
    {
      text: "Rhinocerouses",
      value: "rhinocerouses"
    },
    {
      text: "Triceratopses",
      value: "triceratopses"
    }
  ],
  value: "rhinocerouses"
};
