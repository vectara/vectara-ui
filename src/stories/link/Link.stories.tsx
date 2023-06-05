import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiLink } from "../../ui";

export default {
  title: "Navigation/Link",
  component: VuiLink
} as ComponentMeta<typeof VuiLink>;

export const Link: ComponentStory<typeof VuiLink> = (args) => <VuiLink {...args} />;

Link.args = {
  children: "Here's a link",
  href: "http://www.vectara.com",
  target: "_blank"
};
