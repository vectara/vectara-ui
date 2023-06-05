import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiHorizontalRule } from "../../ui";

export default {
  title: "Layout/HorizontalRule",
  component: VuiHorizontalRule
} as ComponentMeta<typeof VuiHorizontalRule>;

export const HorizontalRule: ComponentStory<typeof VuiHorizontalRule> = () => (
  <>
    <p>Some text above the horizontal rule.</p>
    <VuiHorizontalRule />
    <p>Some text below the horizontal rule.</p>
  </>
);
