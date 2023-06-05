import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiText } from "../../ui";

export default {
  title: "Display/Typography/Text",
  component: VuiText
} as ComponentMeta<typeof VuiText>;

export const Text: ComponentStory<typeof VuiText> = (args) => <VuiText {...args} />;

Text.args = {
  children: (
    <>
      <p>One sentence.</p>
      <p>And another sentence.</p>
    </>
  )
};
