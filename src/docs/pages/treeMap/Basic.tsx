import { VuiTreeMap } from "../../../lib";
import { ChartPaletteSelect } from "../../components/ChartPaletteSelect";

const data = [
  { name: "Documentation", value: 4200 },
  { name: "Blog", value: 2100 },
  { name: "Support tickets", value: 1450 },
  { name: "Forums", value: 980 },
  { name: "Release notes", value: 620 },
  { name: "Changelog", value: 340 }
];

export const Basic = () => {
  return (
    <>
      <ChartPaletteSelect />

      <VuiTreeMap data={data} categoryKey="name" valueKey="value" />
    </>
  );
};
