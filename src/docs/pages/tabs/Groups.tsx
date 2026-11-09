import { useState } from "react";
import { VuiSpacer, VuiTab, VuiTabGroup, VuiTabs } from "../../../lib";

const groups = [
  ["Configure", "Preview"],
  ["Sessions", "Schedules", "Secrets", "Traces"]
];

export const Groups = () => {
  const [selectedTab, setSelectedTab] = useState("Configure");

  const renderGroups = () =>
    groups.map((tabs, index) => (
      <VuiTabGroup key={index}>
        {tabs.map((tab) => (
          <VuiTab key={tab} isActive={tab === selectedTab} onClick={() => setSelectedTab(tab)}>
            {tab}
          </VuiTab>
        ))}
      </VuiTabGroup>
    ));

  return (
    <>
      <VuiTabs tabStyle="enclosed" size="m">
        {renderGroups()}
      </VuiTabs>

      <VuiSpacer size="m" />

      <VuiTabs tabStyle="enclosed" size="s">
        {renderGroups()}
      </VuiTabs>

      <VuiSpacer size="m" />

      <VuiTabs>{renderGroups()}</VuiTabs>
    </>
  );
};
