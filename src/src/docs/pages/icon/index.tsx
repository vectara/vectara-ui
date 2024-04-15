import { Sizes } from "./Sizes";
import { Colors } from "./Colors";

const SizesSource = require("!!raw-loader!./Sizes");
const ColorsSource = require("!!raw-loader!./Colors");

export const icon = {
  name: "Icon",
  path: "/icon",
  examples: [
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    },
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    }
  ]
};
