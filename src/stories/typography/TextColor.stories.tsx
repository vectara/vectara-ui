import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiTextColor, VuiText, VuiTitle } from "../../ui";

export default {
  title: "Display/Typography/TextColor",
  component: VuiTextColor
} as ComponentMeta<typeof VuiTextColor>;

export const TextColor: ComponentStory<typeof VuiTextColor> = (args) => (
  <>
    <VuiTitle size="m">
      <h2>
        Colors in <VuiTextColor {...args}>titles</VuiTextColor>
      </h2>
    </VuiTitle>
    <VuiText>
      <p>
        <VuiTextColor {...args}>Let's</VuiTextColor> put <VuiTextColor {...args}>colors</VuiTextColor> in{" "}
        <VuiTextColor {...args}>here</VuiTextColor>, too!
      </p>
    </VuiText>
  </>
);

TextColor.args = {
  color: "success"
};
