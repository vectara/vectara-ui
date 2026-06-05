import { VuiLineChart } from "../../../lib";

const data = [
  { day: "Mon", p50: 120, p95: 320 },
  { day: "Tue", p50: 132, p95: 410 },
  { day: "Wed", p50: 101, p95: 280 },
  { day: "Thu", p50: 148, p95: 460 },
  { day: "Fri", p50: 160, p95: 520 },
  { day: "Sat", p50: 90, p95: 240 },
  { day: "Sun", p50: 85, p95: 210 }
];

export const Curved = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="day"
      curved
      series={[
        { dataKey: "p50", name: "p50 latency (ms)" },
        { dataKey: "p95", name: "p95 latency (ms)" }
      ]}
    />
  );
};
