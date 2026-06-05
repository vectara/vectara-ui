import { VuiBarChart } from "../../../lib";

const data = [
  { quarter: "Q1", queries: 4200, documents: 1800 },
  { quarter: "Q2", queries: 5100, documents: 2400 },
  { quarter: "Q3", queries: 6800, documents: 3100 },
  { quarter: "Q4", queries: 7400, documents: 3600 }
];

export const Basic = () => {
  return (
    <VuiBarChart
      data={data}
      categoryKey="quarter"
      series={[
        { dataKey: "queries", name: "Queries" },
        { dataKey: "documents", name: "Documents" }
      ]}
    />
  );
};
