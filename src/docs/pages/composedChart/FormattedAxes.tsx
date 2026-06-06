import { VuiComposedChart } from "../../../lib";

// Request volume (bars, left axis) against p95 latency (line, right axis). The
// two axes measure different units, so each gets its own value formatter — and
// the shared tooltip formats each row by the axis its series belongs to.
const data = [
  { time: "10:00", requests: 4200, latency: 820 },
  { time: "10:05", requests: 5100, latency: 1240 },
  { time: "10:10", requests: 6800, latency: 980 },
  { time: "10:15", requests: 7400, latency: 2100 },
  { time: "10:20", requests: 8200, latency: 1560 },
  { time: "10:25", requests: 9100, latency: 1180 }
];

const formatCount = (value: number) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`);

const formatMs = (ms: number) => (ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${ms}ms`);

export const FormattedAxes = () => {
  return (
    <VuiComposedChart
      data={data}
      categoryKey="time"
      formatLeftValue={formatCount}
      formatRightValue={formatMs}
      series={[
        { dataKey: "requests", name: "Requests", type: "bar", axis: "left" },
        { dataKey: "latency", name: "p95 latency", type: "line", axis: "right", curved: true }
      ]}
    />
  );
};
