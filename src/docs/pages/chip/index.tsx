import { Chip } from "./Chip";
const ChipSource = require("!!raw-loader!./Chip");

export const chip = {
  name: "Chip",
  path: "/chip",
  example: {
    component: <Chip />,
    source: ChipSource.default.toString()
  }
};
