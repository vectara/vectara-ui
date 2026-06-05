import { VuiBarChart } from "../../../lib";

const data = [
  { team: "Search", shipped: 12, inProgress: 5, planned: 8 },
  { team: "Platform", shipped: 9, inProgress: 7, planned: 4 },
  { team: "Growth", shipped: 6, inProgress: 3, planned: 9 },
  { team: "Docs", shipped: 4, inProgress: 2, planned: 3 }
];

export const Stacked = () => {
  return (
    <VuiBarChart
      data={data}
      categoryKey="team"
      stacked
      series={[
        { dataKey: "shipped", name: "Shipped" },
        { dataKey: "inProgress", name: "In progress" },
        { dataKey: "planned", name: "Planned" }
      ]}
    />
  );
};
