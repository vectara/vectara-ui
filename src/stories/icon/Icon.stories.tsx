import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiSearch } from "react-icons/bi";
import { VuiIcon } from "../../ui";
import page from "./IconPage.mdx";
import "./icon.scss";

export default {
  title: "Display/Icon",
  component: VuiIcon,
  argTypes: {
    color: { control: "select" }
  },
  parameters: {
    docs: {
      page
    }
  }
} as ComponentMeta<typeof VuiIcon>;

export const Icon: ComponentStory<typeof VuiIcon> = (args) => <VuiIcon {...args} />;

Icon.args = {
  children: <BiSearch />,
  color: "primary"
};

export const IconWithCustomCss: ComponentStory<typeof VuiIcon> = (args) => <VuiIcon {...args} />;

IconWithCustomCss.args = {
  children: <BiSearch />,
  className: "iconCustomClass"
};
