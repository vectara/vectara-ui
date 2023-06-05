import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiCallout, VuiLink } from "../../ui";
import "../../ui/globalStyling/_reset.scss";
import page from "./CalloutPage.mdx";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Display/Callout",
  component: VuiCallout,
  argTypes: {
    title: { control: "text" },
    headingElement: { control: "select" },
    color: { control: "select" }
  },
  parameters: {
    docs: {
      page
    }
  }
} as ComponentMeta<typeof VuiCallout>;

export const Callout: ComponentStory<typeof VuiCallout> = (args) => (
  <BrowserRouter>
    <VuiCallout {...args}>
      <p>
        Here's the content inside of the callout. <VuiLink href="">With a link.</VuiLink>
      </p>
    </VuiCallout>
  </BrowserRouter>
);

Callout.args = {
  title: "This is the title",
  headingElement: "h2",
  color: "primary"
};
