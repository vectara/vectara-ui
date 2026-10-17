import { Theme } from "./Theme";
import { ChartPalette } from "./ChartPalette";

const ThemeSource = require("!!raw-loader!./Theme");
const ChartPaletteSource = require("!!raw-loader!./ChartPalette");

export const theme = {
  name: "Theme",
  path: "/theme",
  examples: [
    {
      name: "Theme",
      component: <Theme />,
      source: ThemeSource.default.toString()
    },
    {
      name: "Chart palette",
      component: <ChartPalette />,
      source: ChartPaletteSource.default.toString()
    }
  ]
};
