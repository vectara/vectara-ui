import { useState } from "react";
import { VuiButtonTertiary, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiTab, VuiTabs } from "../../../lib";
import { Subsection } from "../../components/Subsection";
import { BiStar } from "react-icons/bi";

export const Tabs = () => {
  const [tab, setTab] = useState<"first" | "second" | "third">("first");

  return (
    <>
      <Subsection title="Small size">
        <VuiTabs
          append={
            <VuiButtonTertiary color="primary" size="s">
              Info
            </VuiButtonTertiary>
          }
        >
          <VuiTab isActive={tab === "first"} onClick={() => setTab("first")}>
            <VuiFlexContainer alignItems="center" spacing="xs">
              <VuiFlexItem grow={false}>
                <VuiIcon color="subdued" size="s">
                  <BiStar />
                </VuiIcon>
              </VuiFlexItem>

              <VuiFlexItem grow={false}>First tab</VuiFlexItem>
            </VuiFlexContainer>
          </VuiTab>

          <VuiTab isActive={tab === "second"} onClick={() => setTab("second")}>
            Second tab
          </VuiTab>

          <VuiTab isActive={tab === "third"} onClick={() => setTab("third")}>
            Third tab
          </VuiTab>
        </VuiTabs>
      </Subsection>

      <Subsection title="Medium size">
        <VuiTabs size="m" append={<VuiButtonTertiary color="primary">Info</VuiButtonTertiary>}>
          <VuiTab isActive={tab === "first"} onClick={() => setTab("first")}>
            <VuiFlexContainer alignItems="center" spacing="xs">
              <VuiFlexItem grow={false}>
                <VuiIcon color="subdued" size="m">
                  <BiStar />
                </VuiIcon>
              </VuiFlexItem>

              <VuiFlexItem grow={false}>First tab</VuiFlexItem>
            </VuiFlexContainer>
          </VuiTab>

          <VuiTab isActive={tab === "second"} onClick={() => setTab("second")}>
            Second tab
          </VuiTab>

          <VuiTab isActive={tab === "third"} onClick={() => setTab("third")}>
            Third tab
          </VuiTab>
        </VuiTabs>
      </Subsection>
    </>
  );
};
