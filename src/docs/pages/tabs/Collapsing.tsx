import { useState } from "react";
import { BiHelpCircle, BiRefresh } from "react-icons/bi";
import {
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiTab,
  VuiTabGroup,
  VuiTabs
} from "../../../lib";

const tabGroups = [
  ["Configure", "Data", "Query"],
  ["Query histories", "Analytics"]
];

// Narrow the window to see the groups of tabs collapse into a single tabs navigator before
// they touch their neighbors.
export const Collapsing = () => {
  const [tab, setTab] = useState("Data");

  return (
    <VuiFlexContainer fullWidth justifyContent="spaceBetween" alignItems="center" spacing="s">
      <VuiFlexItem grow={false}>
        <VuiTabs tabStyle="enclosed">
          {tabGroups.map((titles, index) => (
            <VuiTabGroup key={index}>
              {titles.map((title) => (
                <VuiTab key={title} isActive={tab === title} onClick={() => setTab(title)}>
                  {title}
                </VuiTab>
              ))}
            </VuiTabGroup>
          ))}
        </VuiTabs>
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiFlexContainer alignItems="center" spacing="xs">
          <VuiFlexItem grow={false} shrink={false}>
            <VuiButtonSecondary
              color="neutral"
              size="s"
              icon={
                <VuiIcon>
                  <BiHelpCircle />
                </VuiIcon>
              }
            >
              Help
            </VuiButtonSecondary>
          </VuiFlexItem>

          <VuiFlexItem grow={false} shrink={false}>
            <VuiButtonSecondary
              color="neutral"
              size="s"
              icon={
                <VuiIcon>
                  <BiRefresh />
                </VuiIcon>
              }
            >
              Reload
            </VuiButtonSecondary>
          </VuiFlexItem>

          <VuiFlexItem grow={false} shrink={false}>
            <VuiButtonPrimary color="primary" size="s">
              Upload files
            </VuiButtonPrimary>
          </VuiFlexItem>
        </VuiFlexContainer>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
