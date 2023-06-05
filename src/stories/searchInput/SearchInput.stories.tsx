import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiSearchInput } from "../../ui";

export default {
  title: "Forms/SearchInput",
  component: VuiSearchInput
} as ComponentMeta<typeof VuiSearchInput>;

export const SearchInput: ComponentStory<typeof VuiSearchInput> = (args) => <VuiSearchInput {...args} />;
