import { VuiLineChart } from "../../../lib";

const data = [
  { time: "10:00", latency: 820 },
  { time: "10:05", latency: 1240 },
  { time: "10:10", latency: 980 },
  { time: "10:15", latency: 2100 },
  { time: "10:20", latency: 1560 },
  { time: "10:25", latency: 1180 }
];

// formatValue formats both the value-axis ticks and the tooltip readout, so raw
// millisecond values render as human-readable durations.
const formatMs = (ms: number) => (ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${ms}ms`);

export const FormattedValues = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="time"
      formatValue={formatMs}
      series={[{ dataKey: "latency", name: "Latency" }]}
    />
  );
};
