import { Sizes } from "./Sizes";
import { Colors } from "./Colors";

const SizesSource = require("!!raw-loader!./Sizes");
const ColorsSource = require("!!raw-loader!./Colors");

export const icon = {
  name: "Icon",
  path: "/icon",
  examples: [
    {
      component: <Sizes />,
      source: SizesSource.default.toString()
    },
    {
      component: <Colors />,
      source: ColorsSource.default.toString()
    }
  ]
};
