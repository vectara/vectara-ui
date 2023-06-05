import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiSpinner } from "../../ui";

export default {
  title: "Display/Spinner",
  component: VuiSpinner
} as ComponentMeta<typeof VuiSpinner>;

export const Spinner: ComponentStory<typeof VuiSpinner> = (args) => <VuiSpinner {...args} />;
