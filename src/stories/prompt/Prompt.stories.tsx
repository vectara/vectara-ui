import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiPrompt } from "../../ui";
import page from "./PromptPage.mdx";

export default {
  title: "Display/Prompt",
  component: VuiPrompt,
  parameters: {
    docs: {
      page
    }
  }
} as ComponentMeta<typeof VuiPrompt>;

export const Prompt: ComponentStory<typeof VuiPrompt> = (args) => <VuiPrompt {...args} />;

Prompt.args = {
  children: (
    <>
      <p>This is the content of the prompt.</p>
    </>
  )
};
