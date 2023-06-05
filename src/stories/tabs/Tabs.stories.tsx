import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VuiTabs, VuiTab, VuiButton } from "../../ui";

export default {
  title: "Navigation/Tabs",
  component: VuiTabs
} as ComponentMeta<typeof VuiTabs>;

export const Tabs: ComponentStory<typeof VuiTabs> = (args) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <VuiTabs {...args}>
      <VuiTab isActive={activeTab === 0} to="" onClick={() => setActiveTab(0)}>
        Tab 1
      </VuiTab>

      <VuiTab isActive={activeTab === 1} to="" onClick={() => setActiveTab(1)}>
        Tab 2
      </VuiTab>

      <VuiTab isActive={activeTab === 2} to="" onClick={() => setActiveTab(2)}>
        Tab 3
      </VuiTab>

      <VuiTab isActive={activeTab === 3} to="" onClick={() => setActiveTab(3)}>
        Tab 4
      </VuiTab>
    </VuiTabs>
  );
};

Tabs.args = {
  append: <VuiButton color="primary">Learn more</VuiButton>
};
