import { VuiScatterChart } from "../../../lib";

// Each point pairs a model's response latency (x, ms) with its relevance score (y).
const modelA = [
  { x: 120, y: 0.78 },
  { x: 150, y: 0.81 },
  { x: 180, y: 0.85 },
  { x: 210, y: 0.88 },
  { x: 240, y: 0.9 },
  { x: 300, y: 0.92 }
];

const modelB = [
  { x: 90, y: 0.72 },
  { x: 130, y: 0.75 },
  { x: 170, y: 0.79 },
  { x: 220, y: 0.83 },
  { x: 260, y: 0.86 },
  { x: 320, y: 0.89 }
];

export const Basic = () => {
  return (
    <VuiScatterChart
      series={[
        { name: "Model A", data: modelA },
        { name: "Model B", data: modelB }
      ]}
    />
  );
};
