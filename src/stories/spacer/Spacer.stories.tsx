import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiSpacer } from "../../ui";
import "./spacer.scss";
import page from "./SpacerPage.mdx";

export default {
  title: "Layout/Spacer",
  component: VuiSpacer,
  argTypes: {
    size: { control: "radio" }
  },
  parameters: {
    docs: {
      page
    }
  }
} as ComponentMeta<typeof VuiSpacer>;

export const Spacer: ComponentStory<typeof VuiSpacer> = (args) => (
  <>
    <div className="demoBlock" />
    <VuiSpacer {...args} />
    <div className="demoBlock" />
    <VuiSpacer {...args} />
    <div className="demoBlock" />
    <VuiSpacer {...args} />
    <div className="demoBlock" />
    <VuiSpacer {...args} />
    <div className="demoBlock" />
    <VuiSpacer {...args} />
    <div className="demoBlock" />
  </>
);

Spacer.args = {
  size: "s"
};
