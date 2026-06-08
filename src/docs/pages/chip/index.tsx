import { Chip } from "./Chip";
import { Small } from "./Small";

const ChipSource = require("!!raw-loader!./Chip");
const SmallSource = require("!!raw-loader!./Small");

export const chip = {
  name: "Chip",
  path: "/chip",
  examples: [
    {
      name: "Chip",
      component: <Chip />,
      source: ChipSource.default.toString()
    },
    {
      name: "Small",
      component: <Small />,
      source: SmallSource.default.toString()
    }
  ]
};
