import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { VuiButtonTertiary, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiTab, VuiTabs } from "../../../lib";

export const Medium = () => {
  const [tab, setTab] = useState<"first" | "second" | "third">("first");

  return (
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
  );
};
