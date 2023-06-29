import { useState } from "react";
import { VuiCode, VuiSpacer, VuiTab, VuiTabs, VuiTitle } from "../../lib";

type Props = {
  name?: string;
  component: React.ReactNode;
  source: string;
};

export const Example = ({ name, component, source }: Props) => {
  const [tab, setTab] = useState<"example" | "source">("example");

  return (
    <>
      {name && (
        <VuiTitle size="s">
          <h3>{name}</h3>
        </VuiTitle>
      )}

      <VuiSpacer size="xs" />

      <VuiTabs>
        <VuiTab isActive={tab === "example"} onClick={() => setTab("example")}>
          Example
        </VuiTab>
        <VuiTab isActive={tab === "source"} onClick={() => setTab("source")}>
          Source
        </VuiTab>
      </VuiTabs>

      {tab === "example" && (
        <>
          <VuiSpacer size="m" />
          {component}
        </>
      )}
      {tab === "source" && <VuiCode language="tsx">{source}</VuiCode>}

      <VuiSpacer size="l" />
    </>
  );
};
