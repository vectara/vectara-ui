import { ValueAxis, VuiLineChart } from "../../../lib";

const data = [
  { time: "10:00", latency: 820 },
  { time: "10:05", latency: 1240 },
  { time: "10:10", latency: 980 },
  { time: "10:15", latency: 2100 },
  { time: "10:20", latency: 1560 },
  { time: "10:25", latency: 1180 }
];

const formatMs = (ms: number) => (ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${ms}ms`);

// Left to itself, the axis picks ticks that are round in the data's unit
// (milliseconds), which read as odd fractions once labeled in seconds. A
// valueAxis chooses the ticks in the unit the labels show and leaves one step
// of space above the peak. The tooltip still reads the exact value.
const STEPS_MS = [100, 200, 500, 1000, 2000, 5000];

const secondsAxis: ValueAxis = ({ max }, { maxIntervals }) => {
  const step =
    STEPS_MS.find((candidate) => Math.floor(max / candidate) + 1 <= maxIntervals) ?? STEPS_MS[STEPS_MS.length - 1];
  const intervals = Math.floor(max / step) + 1;
  return {
    ticks: Array.from({ length: intervals + 1 }, (_, index) => index * step),
    formatTick: (ms) => `${ms / 1000}s`
  };
};

export const NiceTicks = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="time"
      formatValue={formatMs}
      valueAxis={secondsAxis}
      series={[{ dataKey: "latency", name: "Latency" }]}
    />
  );
};
