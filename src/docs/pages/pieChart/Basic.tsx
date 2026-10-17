import { VuiPieChart } from "../../../lib";
import { ChartPaletteSelect } from "../../components/ChartPaletteSelect";

const data = [
  { source: "Documentation", count: 3200 },
  { source: "Blog", count: 2100 },
  { source: "Support tickets", count: 1450 },
  { source: "Forums", count: 980 },
  { source: "Release notes", count: 540 }
];

export const Basic = () => {
  return (
    <>
      <ChartPaletteSelect />

      <VuiPieChart data={data} categoryKey="source" valueKey="count" />
    </>
  );
};
