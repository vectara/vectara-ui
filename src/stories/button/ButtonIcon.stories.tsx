import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiBookOpen } from "react-icons/bi";
import { VuiIcon, VuiButtonIcon } from "../../ui";
import "../../ui/globalStyling/_reset.scss";

export default {
  title: "Navigation/ButtonIcon",
  component: VuiButtonIcon
} as ComponentMeta<typeof VuiButtonIcon>;

export const ButtonIcon: ComponentStory<typeof VuiButtonIcon> = (args) => <VuiButtonIcon {...args} />;

ButtonIcon.args = {
  icon: (
    <VuiIcon>
      <BiBookOpen />
    </VuiIcon>
  ),
  color: "primary",
  href: "https://www.vectara.com",
  target: "_blank"
};
