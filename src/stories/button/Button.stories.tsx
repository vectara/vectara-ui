import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiSearch } from "react-icons/bi";
import { VuiButton, VuiIcon } from "../../ui";
import googleSsoLogo from "./google_sso_logo.png";
import "../../ui/globalStyling/_reset.scss";

export default {
  title: "Navigation/Button",
  component: VuiButton
} as ComponentMeta<typeof VuiButton>;

export const Button: ComponentStory<typeof VuiButton> = (args) => <VuiButton {...args}>Here's a button</VuiButton>;

Button.args = {
  color: "normal"
};

export const ButtonWithIcon: ComponentStory<typeof VuiButton> = (args) => (
  <VuiButton {...args}>Here's a button with an icon</VuiButton>
);

ButtonWithIcon.args = {
  icon: (
    <VuiIcon>
      <BiSearch />
    </VuiIcon>
  ),
  color: "normal"
};

export const ButtonWithCustomIcon: ComponentStory<typeof VuiButton> = (args) => (
  <VuiButton {...args}>Here's a button with a custom icon</VuiButton>
);

ButtonWithCustomIcon.args = {
  icon: <img src={googleSsoLogo} width={18} />,
  color: "normal"
};

export const ButtonLinkWithIcon: ComponentStory<typeof VuiButton> = (args) => (
  <VuiButton {...args}>Here's a button link with an icon</VuiButton>
);

ButtonLinkWithIcon.args = {
  href: "https://www.vectara.com",
  target: "_blank",
  icon: (
    <VuiIcon>
      <BiSearch />
    </VuiIcon>
  ),
  color: "normal"
};
