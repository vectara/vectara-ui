import { VuiLineChart } from "../../../lib";

const data = [
  { month: "Jan", storage: 120, bandwidth: 80 },
  { month: "Feb", storage: 180, bandwidth: 110 },
  { month: "Mar", storage: 240, bandwidth: 140 },
  { month: "Apr", storage: 320, bandwidth: 200 },
  { month: "May", storage: 410, bandwidth: 260 },
  { month: "Jun", storage: 520, bandwidth: 300 }
];

export const Area = () => {
  return (
    <VuiLineChart
      data={data}
      categoryKey="month"
      variant="area"
      curved
      series={[
        { dataKey: "storage", name: "Storage (GB)" },
        { dataKey: "bandwidth", name: "Bandwidth (GB)" }
      ]}
    />
  );
};
