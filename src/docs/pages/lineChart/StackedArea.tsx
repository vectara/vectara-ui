import { VuiLineChart } from "../../../lib";

// Search starts well above generation, then the two cross around March as generation overtakes it —
// in a stacked area, the bottom band thins while the top band thickens.
const data = [
  { month: "Jan", search: 5200, generation: 1000 },
  { month: "Feb", search: 4300, generation: 1800 },
  { month: "Mar", search: 3400, generation: 2700 },
  { month: "Apr", search: 2600, generation: 3600 },
  { month: "May", search: 1800, generation: 4500 },
  { month: "Jun", search: 1100, generation: 5400 }
];

export const StackedArea = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="month"
      variant="stacked-area"
      curved
      series={[
        { dataKey: "search", name: "Search" },
        { dataKey: "generation", name: "Generation" }
      ]}
    />
  );
};
