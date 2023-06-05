import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiSearch } from "react-icons/bi";
import { VuiButtonEmpty, VuiIcon } from "../../ui";
import googleSsoLogo from "./google_sso_logo.png";
import "../../ui/globalStyling/_reset.scss";

export default {
  title: "Navigation/ButtonEmpty",
  component: VuiButtonEmpty
} as ComponentMeta<typeof VuiButtonEmpty>;

export const ButtonEmpty: ComponentStory<typeof VuiButtonEmpty> = (args) => (
  <VuiButtonEmpty {...args}>Here's a button</VuiButtonEmpty>
);

ButtonEmpty.args = {
  color: "normal"
};

export const ButtonEmptyWithIcon: ComponentStory<typeof VuiButtonEmpty> = (args) => (
  <VuiButtonEmpty {...args}>Here's a button with an icon</VuiButtonEmpty>
);

ButtonEmptyWithIcon.args = {
  icon: (
    <VuiIcon>
      <BiSearch />
    </VuiIcon>
  ),
  color: "normal"
};

export const ButtonEmptyWithCustomIcon: ComponentStory<typeof VuiButtonEmpty> = (args) => (
  <VuiButtonEmpty {...args}>Here's a button with a custom icon</VuiButtonEmpty>
);

ButtonEmptyWithCustomIcon.args = {
  icon: <img src={googleSsoLogo} width={18} />,
  color: "normal"
};
