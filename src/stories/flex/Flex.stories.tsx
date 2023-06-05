import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiFlexContainer, VuiFlexItem } from "../../ui";
import "./flex.scss";
import page from "./FlexPage.mdx";

export default {
  title: "Layout/Flex",
  component: VuiFlexContainer,
  argTypes: {
    alignItems: { control: "select" },
    direction: { control: "select" },
    justifyContent: { control: "select" },
    spacing: { control: "select" }
  },
  parameters: {
    docs: {
      page
    }
  }
} as ComponentMeta<typeof VuiFlexContainer>;

export const FlexContainer: ComponentStory<typeof VuiFlexContainer> = (args) => (
  <VuiFlexContainer {...args}>
    <VuiFlexItem grow={0} className="flexItem1">
      First content
    </VuiFlexItem>

    <VuiFlexItem grow={0} className="flexItem2">
      Second content
    </VuiFlexItem>

    <VuiFlexItem grow={0} className="flexItem3">
      Third content
    </VuiFlexItem>
  </VuiFlexContainer>
);

FlexContainer.args = {
  alignItems: "center",
  direction: "row",
  justifyContent: "spaceBetween",
  spacing: "m"
};

export const FlexItem: ComponentStory<typeof VuiFlexContainer> = (args) => (
  <>
    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={10} className="flexItem" />
    </VuiFlexContainer>

    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={1} className="flexItem" />

      <VuiFlexItem grow={9} className="flexItem" />
    </VuiFlexContainer>

    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={2} className="flexItem" />

      <VuiFlexItem grow={8} className="flexItem" />
    </VuiFlexContainer>

    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={3} className="flexItem" />

      <VuiFlexItem grow={7} className="flexItem" />
    </VuiFlexContainer>

    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={4} className="flexItem" />

      <VuiFlexItem grow={6} className="flexItem" />
    </VuiFlexContainer>

    <VuiFlexContainer {...args}>
      <VuiFlexItem grow={5} className="flexItem" />

      <VuiFlexItem grow={5} className="flexItem" />
    </VuiFlexContainer>
  </>
);

FlexItem.args = {
  alignItems: "center",
  direction: "row",
  justifyContent: "spaceBetween",
  spacing: "m"
};
