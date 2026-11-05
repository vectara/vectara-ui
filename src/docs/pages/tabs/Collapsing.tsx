import { useState } from "react";
import { BiHelpCircle, BiRefresh } from "react-icons/bi";
import {
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiTab,
  VuiTabs
} from "../../../lib";

const primaryTabs = ["Configure", "Data", "Query"];
const secondaryTabs = ["Query histories", "Analytics"];

// Narrow the window to see each group of tabs collapse into a tabs navigator before it
// touches its neighbors.
export const Collapsing = () => {
  const [tab, setTab] = useState("Data");

  const renderTabs = (titles: string[]) => (
    <VuiTabs tabStyle="enclosed">
      {titles.map((title) => (
        <VuiTab key={title} isActive={tab === title} onClick={() => setTab(title)}>
          {title}
        </VuiTab>
      ))}
    </VuiTabs>
  );

  return (
    <VuiFlexContainer fullWidth justifyContent="spaceBetween" alignItems="center" spacing="s">
      <VuiFlexItem grow={false}>{renderTabs(primaryTabs)}</VuiFlexItem>
      <VuiFlexItem grow={false}>{renderTabs(secondaryTabs)}</VuiFlexItem>

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
