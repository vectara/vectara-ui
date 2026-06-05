import { VuiComposedChart } from "../../../lib";

// Query volume (bars, left axis) overlaid with p95 latency (line, right axis) — two metrics on
// different scales sharing one chart.
const data = [
  { month: "Jan", queries: 4200, latency: 180 },
  { month: "Feb", queries: 5100, latency: 172 },
  { month: "Mar", queries: 6800, latency: 165 },
  { month: "Apr", queries: 7400, latency: 158 },
  { month: "May", queries: 8200, latency: 150 },
  { month: "Jun", queries: 9100, latency: 142 }
];

export const Basic = () => {
  return (
    <VuiComposedChart
      data={data}
      categoryKey="month"
      series={[
        { dataKey: "queries", name: "Queries", type: "bar", axis: "left" },
        { dataKey: "latency", name: "p95 latency (ms)", type: "line", axis: "right", curved: true }
      ]}
    />
  );
};
