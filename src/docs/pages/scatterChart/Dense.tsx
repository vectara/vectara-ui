import { VuiScatterChart } from "../../../lib";

// A deterministic pseudo-random value in [0, 1) from a seed, so the cloud stays stable across renders.
const rand = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Scatter `count` points around a center, jittered independently on each axis.
const cluster = (count: number, centerX: number, centerY: number, spreadX: number, spreadY: number, seed: number) =>
  Array.from({ length: count }, (_, index) => {
    const s = index + seed;
    return {
      x: Math.round(centerX + (rand(s * 1.1) - 0.5) * spreadX),
      y: Number((centerY + (rand(s * 2.3) - 0.5) * spreadY).toFixed(3))
    };
  });

// Three overlapping clouds of ~160 points each — nearly 500 points total.
const modelA = cluster(160, 140, 0.8, 120, 0.18, 1);
const modelB = cluster(160, 230, 0.85, 140, 0.16, 600);
const modelC = cluster(160, 320, 0.9, 160, 0.14, 1200);

export const Dense = () => {
  return (
    <VuiScatterChart
      height={440}
      series={[
        { name: "Model A", data: modelA },
        { name: "Model B", data: modelB },
        { name: "Model C", data: modelC }
      ]}
    />
  );
};
