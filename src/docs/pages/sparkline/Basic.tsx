import { VuiSparkline } from "../../../lib";
import { ChartPaletteSelect } from "../../components/ChartPaletteSelect";

const data = [{ v: 4 }, { v: 6 }, { v: 5 }, { v: 8 }, { v: 7 }, { v: 10 }, { v: 9 }, { v: 12 }];

export const Basic = () => {
  return (
    <>
      <ChartPaletteSelect />

      <VuiSparkline data={data} dataKey="v" />
    </>
  );
};
