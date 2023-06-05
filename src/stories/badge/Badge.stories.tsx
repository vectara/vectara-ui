import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiBadge } from "../../ui";

export default {
  title: "Display/Badge",
  component: VuiBadge
} as ComponentMeta<typeof VuiBadge>;

export const Badge: ComponentStory<typeof VuiBadge> = (args) => {
  return <VuiBadge {...args}>Badge</VuiBadge>;
};

Badge.args = {
  color: "accent",
  onClick: undefined
};

export const ClickableBadge: ComponentStory<typeof VuiBadge> = (args) => {
  return <VuiBadge {...args}>Badge</VuiBadge>;
};

ClickableBadge.args = {
  color: "accent",
  onClick: () => console.log("Clicked")
};
