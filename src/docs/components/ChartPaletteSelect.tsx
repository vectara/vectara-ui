import { createContext, useContext } from "react";
import { ChartPaletteName, VuiSelect, VuiSpacer } from "../../lib";

const options: Array<{ text: string; value: ChartPaletteName }> = [
  { text: "Accessible palette", value: "accessible" },
  { text: "Aesthetic palette", value: "aesthetic" }
];

type ChartPaletteContextType = {
  chartPalette: ChartPaletteName;
  setChartPalette: (palette: ChartPaletteName) => void;
};

// Holds the docs-wide chart palette, which Docs passes to the root VuiContextProvider.
export const ChartPaletteContext = createContext<ChartPaletteContextType | undefined>(undefined);

// Lets docs readers switch the palette of every chart in the docs.
export const ChartPaletteSelect = () => {
  const context = useContext(ChartPaletteContext);
  if (context === undefined) {
    throw new Error("ChartPaletteSelect must be used within a ChartPaletteContext.Provider");
  }
  const { chartPalette, setChartPalette } = context;

  return (
    <>
      <VuiSelect
        size="s"
        aria-label="Chart palette"
        options={options}
        value={chartPalette}
        onChange={(event) => setChartPalette(event.target.value as ChartPaletteName)}
      />

      <VuiSpacer size="m" />
    </>
  );
};
