import { VuiBarChart } from "../../../lib";

const data = [
  { source: "Documentation", count: 3200 },
  { source: "Blog", count: 2100 },
  { source: "Support tickets", count: 1450 },
  { source: "Forums", count: 980 },
  { source: "Release notes", count: 540 }
];

export const Horizontal = () => {
  return (
    <VuiBarChart
      data={data}
      categoryKey="source"
      orientation="bars"
      series={[{ dataKey: "count", name: "Indexed documents", color: "teal" }]}
    />
  );
};
