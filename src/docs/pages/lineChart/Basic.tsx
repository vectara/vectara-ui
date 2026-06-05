import { VuiLineChart } from "../../../lib";

const data = [
  { month: "Jan", queries: 4200, documents: 1800 },
  { month: "Feb", queries: 4800, documents: 2100 },
  { month: "Mar", queries: 4500, documents: 2600 },
  { month: "Apr", queries: 6100, documents: 2900 },
  { month: "May", queries: 6800, documents: 3400 },
  { month: "Jun", queries: 7400, documents: 3600 }
];

export const Basic = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="month"
      series={[
        { dataKey: "queries", name: "Queries" },
        { dataKey: "documents", name: "Documents" }
      ]}
    />
  );
};
