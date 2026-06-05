import { VuiPieChart } from "../../../lib";

// With many slices, outside labels overlap, so hide them and rely on the legend and tooltip.
const data = [
  { region: "North America", revenue: 4200 },
  { region: "Europe", revenue: 3100 },
  { region: "Asia Pacific", revenue: 2400 },
  { region: "Latin America", revenue: 1200 },
  { region: "Middle East", revenue: 760 },
  { region: "Africa", revenue: 480 }
];

export const Unlabeled = () => {
  return <VuiPieChart data={data} categoryKey="region" valueKey="revenue" showLabels={false} />;
};
