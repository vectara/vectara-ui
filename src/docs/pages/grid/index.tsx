import { Grid } from "./Grid";
import { GridSpanning } from "./GridSpanning";
import { GridSimple } from "./GridSimple";
import { GridAlignment } from "./GridAlignment";
import { GridResponsive } from "./GridResponsive";
import { GridAutoRows } from "./GridAutoRows";

const GridSource = require("!!raw-loader!./Grid");
const GridSpanningSource = require("!!raw-loader!./GridSpanning");
const GridSimpleSource = require("!!raw-loader!./GridSimple");
const GridAlignmentSource = require("!!raw-loader!./GridAlignment");
const GridResponsiveSource = require("!!raw-loader!./GridResponsive");
const GridAutoRowsSource = require("!!raw-loader!./GridAutoRows");

export const grid = {
  name: "Grid",
  path: "/grid",
  examples: [
    {
      name: "Basic grid",
      component: <Grid />,
      source: GridSource.default.toString()
    },
    {
      name: "Column and row spanning",
      component: <GridSpanning />,
      source: GridSpanningSource.default.toString()
    },
    {
      name: "Simple grid",
      component: <GridSimple />,
      source: GridSimpleSource.default.toString()
    },
    {
      name: "Alignment",
      component: <GridAlignment />,
      source: GridAlignmentSource.default.toString()
    },
    {
      name: "Responsive columns",
      component: <GridResponsive />,
      source: GridResponsiveSource.default.toString()
    },
    {
      name: "Auto rows",
      component: <GridAutoRows />,
      source: GridAutoRowsSource.default.toString()
    }
  ]
};
