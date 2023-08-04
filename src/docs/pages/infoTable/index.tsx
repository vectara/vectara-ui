import { Simple } from "./Simple";
import { Complex } from "./Complex";

const SimpleSource = require("!!raw-loader!./Simple");
const ComplexSource = require("!!raw-loader!./Complex");

export const infoTable = {
  name: "Info table",
  path: "/infoTable",
  examples: [
    {
      name: "Simple",
      component: <Simple />,
      source: SimpleSource.default.toString()
    },
    {
      name: "Complex",
      component: <Complex />,
      source: ComplexSource.default.toString()
    }
  ]
};
