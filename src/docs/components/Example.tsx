import { useState } from "react";
import { VuiCode, VuiSpacer, VuiTab, VuiTabs, VuiTitle } from "../../lib";

type Props = {
  name: string;
  component: React.ReactNode;
  source: string;
};

export const Example = ({ name, component, source }: Props) => {
  const [tab, setTab] = useState<"example" | "source">("example");

  return (
    <>
      <VuiTitle size="s">
        <h3>{name}</h3>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiTabs>
        <VuiTab isActive={tab === "example"} onClick={() => setTab("example")}>
          Example
        </VuiTab>
        <VuiTab isActive={tab === "source"} onClick={() => setTab("source")}>
          Source
        </VuiTab>
      </VuiTabs>

      <VuiSpacer size="s" />

      {tab === "example" && component}
      {tab === "source" && <VuiCode>{source}</VuiCode>}
    </>
  );
};
