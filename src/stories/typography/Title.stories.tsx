import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiTitle } from "../../ui";

export default {
  title: "Display/Typography/Title",
  component: VuiTitle
} as ComponentMeta<typeof VuiTitle>;

export const Title: ComponentStory<typeof VuiTitle> = (args) => <VuiTitle {...args} />;

Title.args = {
  children: <h2>This is a title</h2>
};
