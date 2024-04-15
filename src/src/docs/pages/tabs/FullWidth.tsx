import { useState } from "react";
import { VuiTab, VuiTabs } from "../../../lib";

export const FullWidth = () => {
  const [tab, setTab] = useState<"first" | "second" | "third">("first");

  return (
    <VuiTabs fullWidth>
      <VuiTab isActive={tab === "first"} onClick={() => setTab("first")}>
        First tab
      </VuiTab>

      <VuiTab isActive={tab === "second"} onClick={() => setTab("second")}>
        Second tab with a very long label that will likely overflow
      </VuiTab>

      <VuiTab isActive={tab === "third"} onClick={() => setTab("third")}>
        Third tab
      </VuiTab>
    </VuiTabs>
  );
};
