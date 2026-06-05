import { VuiFlexContainer, VuiFlexItem, VuiSparkline, VuiStat } from "../../../lib";

const queries = [{ v: 320 }, { v: 410 }, { v: 380 }, { v: 520 }, { v: 610 }, { v: 700 }, { v: 740 }];
const latency = [{ v: 180 }, { v: 172 }, { v: 165 }, { v: 158 }, { v: 150 }, { v: 142 }, { v: 138 }];

// Sparklines sit inline beside the numbers they summarize.
export const Inline = () => {
  return (
    <VuiFlexContainer spacing="xl">
      <VuiFlexItem grow={false}>
        <VuiStat title="Queries" text="7,400" />
        <VuiSparkline data={queries} dataKey="v" />
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiStat title="p95 latency" text="138ms" />
        <VuiSparkline data={latency} dataKey="v" variant="bar" color="teal" />
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
