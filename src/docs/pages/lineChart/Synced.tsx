import { VuiBarChart, VuiLineChart, VuiSpacer } from "../../../lib";

// The two charts cover the same timeline at different resolutions. Hovering
// either one highlights the matching timestamp on both. syncMethod "value"
// aligns by the x-axis value rather than by data index, which is what lets
// charts with differing point counts stay in step.
const latency = [
  { time: "10:00", p95: 320 },
  { time: "10:10", p95: 280 },
  { time: "10:20", p95: 460 },
  { time: "10:30", p95: 240 }
];

const requests = [
  { time: "10:00", requests: 1200 },
  { time: "10:05", requests: 1800 },
  { time: "10:10", requests: 1500 },
  { time: "10:15", requests: 2100 },
  { time: "10:20", requests: 1900 },
  { time: "10:25", requests: 1700 },
  { time: "10:30", requests: 1400 }
];

const SYNC_ID = "trafficDemo";

export const Synced = () => {
  return (
    <>
      <VuiLineChart
        data={latency}
        categoryKey="time"
        syncId={SYNC_ID}
        syncMethod="value"
        height={200}
        series={[{ dataKey: "p95", name: "p95 latency (ms)" }]}
      />
      <VuiSpacer size="m" />
      <VuiBarChart
        data={requests}
        categoryKey="time"
        syncId={SYNC_ID}
        syncMethod="value"
        height={200}
        series={[{ dataKey: "requests", name: "Requests" }]}
      />
    </>
  );
};
