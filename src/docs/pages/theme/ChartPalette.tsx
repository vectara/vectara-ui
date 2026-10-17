import { useState } from "react";
import {
  VuiBarChart,
  VuiContextProvider,
  VuiFlexContainer,
  VuiFlexItem,
  VuiPieChart,
  VuiSpacer,
  VuiToggle
} from "../../../lib";

const usage = [
  { month: "Jan", search: 420, chat: 260, summarize: 180, rerank: 120 },
  { month: "Feb", search: 480, chat: 310, summarize: 200, rerank: 140 },
  { month: "Mar", search: 530, chat: 390, summarize: 230, rerank: 150 },
  { month: "Apr", search: 590, chat: 450, summarize: 270, rerank: 190 }
];

const sources = [
  { source: "Docs", count: 3200 },
  { source: "Blog", count: 2100 },
  { source: "Tickets", count: 1450 },
  { source: "Forums", count: 980 },
  { source: "Notes", count: 760 },
  { source: "Wiki", count: 540 },
  { source: "Email", count: 410 },
  { source: "Other", count: 300 }
];

// The chartPalette prop sets series colors for every chart beneath the provider.
// Set it once on your app's root VuiContextProvider.
export const ChartPalette = () => {
  const [isAesthetic, setIsAesthetic] = useState(true);

  return (
    <>
      <VuiToggle label="Aesthetic palette" checked={isAesthetic} onChange={() => setIsAesthetic(!isAesthetic)} />

      <VuiSpacer size="m" />

      <VuiContextProvider chartPalette={isAesthetic ? "aesthetic" : "accessible"} isThemeIsolated>
        <VuiFlexContainer spacing="l">
          <VuiFlexItem grow={1}>
            <VuiBarChart
              data={usage}
              categoryKey="month"
              stacked
              series={[
                { dataKey: "search", name: "Search" },
                { dataKey: "chat", name: "Chat" },
                { dataKey: "summarize", name: "Summarize" },
                { dataKey: "rerank", name: "Rerank" }
              ]}
            />
          </VuiFlexItem>

          <VuiFlexItem grow={1}>
            <VuiPieChart data={sources} categoryKey="source" valueKey="count" donut showLabels={false} />
          </VuiFlexItem>
        </VuiFlexContainer>
      </VuiContextProvider>
    </>
  );
};
