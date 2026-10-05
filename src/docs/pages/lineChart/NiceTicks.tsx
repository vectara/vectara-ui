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
// (milliseconds), which can result in odd-looking tick labels. For example,
// by default these values will render as 550ms, 1.1s, 1.6s, and 2.2s.
const STEPS_MS = [100, 200, 500, 1000, 2000, 5000];

const secondsAxis: ValueAxis = ({ max }, { maxIntervals }) => {
  // Determine the appropriate step size for the axis based on the maximum value and allowed intervals.
  const stepSize =
    STEPS_MS.find((candidate) => Math.floor(max / candidate) + 1 <= maxIntervals) ?? STEPS_MS[STEPS_MS.length - 1];
  // Calculate the number of intervals based on the chosen step size.
  const intervals = Math.floor(max / stepSize) + 1;
  return {
    // Generate the tick values for the axis based on the number of intervals and step size.
    ticks: Array.from({ length: intervals + 1 }, (_, index) => index * stepSize),
    // Convert ms to seconds for display, ensuring that the tick labels are in whole seconds, or near to it.
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
