import { Simple } from "./Simple";
import { Info } from "./Info";

const SimpleSource = require("!!raw-loader!./Simple");

export const infoTable = {
  name: "Info table",
  path: "/infoTable",
  examples: [
    {
      name: "Info",
      component: <Info />,
      source: SimpleSource.default.toString()
    },
    {
      name: "Simple",
      component: <Simple />,
      source: SimpleSource.default.toString()
    }
  ]
};
