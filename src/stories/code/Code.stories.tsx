import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiCode } from "../../ui";
import "../../ui/globalStyling/_reset.scss";

export default {
  title: "Display/Code",
  component: VuiCode
} as ComponentMeta<typeof VuiCode>;

export const Code: ComponentStory<typeof VuiCode> = (args) => {
  const content = `
<div class="block">
  <h1>This is HTML</h1>
</div>  
  `;

  return <VuiCode {...args}>{content}</VuiCode>;
};
