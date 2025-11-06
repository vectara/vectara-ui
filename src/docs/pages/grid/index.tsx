import { Grid } from "./Grid";
import { GridSpanning } from "./GridSpanning";
import { GridTemplateAreas } from "./GridTemplateAreas";
import { GridSimple } from "./GridSimple";
import { GridAlignment } from "./GridAlignment";

const GridSource = require("!!raw-loader!./Grid");
const GridSpanningSource = require("!!raw-loader!./GridSpanning");
const GridTemplateAreasSource = require("!!raw-loader!./GridTemplateAreas");
const GridSimpleSource = require("!!raw-loader!./GridSimple");
const GridAlignmentSource = require("!!raw-loader!./GridAlignment");

export const grid = {
  name: "Grid",
  path: "/grid",
  examples: [
    {
      name: "Basic Grid",
      component: <Grid />,
      source: GridSource.default.toString()
    },
    {
      name: "Column and Row Spanning",
      component: <GridSpanning />,
      source: GridSpanningSource.default.toString()
    },
    {
      name: "Template Areas",
      component: <GridTemplateAreas />,
      source: GridTemplateAreasSource.default.toString()
    },
    {
      name: "SimpleGrid",
      component: <GridSimple />,
      source: GridSimpleSource.default.toString()
    },
    {
      name: "Alignment",
      component: <GridAlignment />,
      source: GridAlignmentSource.default.toString()
    }
  ]
};
