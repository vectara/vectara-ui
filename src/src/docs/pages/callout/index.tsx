import { Variations } from "./Variations";
import { Colors } from "./Colors";

const VariationsSource = require("!!raw-loader!./Variations");
const ColorsSource = require("!!raw-loader!./Colors");

export const callout = {
  name: "Callout",
  path: "/callout",
  examples: [
    {
      name: "Variations",
      component: <Variations />,
      source: VariationsSource.default.toString()
    },
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    }
  ]
};
