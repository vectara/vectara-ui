import { Grid } from "./Grid";
const GridSource = require("!!raw-loader!./Grid");

export const grid = {
  name: "Grid",
  path: "/grid",
  example: {
    component: <Grid />,
    source: GridSource.default.toString()
  }
};
