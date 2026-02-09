import { useState } from "react";
import { VuiSpacer, VuiTab, VuiTabs } from "../../../lib";

export const Enclosed = () => {
  const [tab, setTab] = useState<"first" | "second" | "third">("first");

  return (
    <>
      <VuiTabs tabStyle="enclosed" size="m">
        <VuiTab isActive={tab === "first"} onClick={() => setTab("first")}>
          First tab
        </VuiTab>

        <VuiTab isActive={tab === "second"} onClick={() => setTab("second")}>
          Second tab
        </VuiTab>

        <VuiTab isActive={tab === "third"} onClick={() => setTab("third")}>
          Third tab
        </VuiTab>
      </VuiTabs>

      <VuiSpacer size="m" />

      <VuiTabs tabStyle="enclosed" size="s">
        <VuiTab isActive={tab === "first"} onClick={() => setTab("first")}>
          First tab
        </VuiTab>

        <VuiTab isActive={tab === "second"} onClick={() => setTab("second")}>
          Second tab
        </VuiTab>

        <VuiTab isActive={tab === "third"} onClick={() => setTab("third")}>
          Third tab
        </VuiTab>
      </VuiTabs>
    </>
  );
};
