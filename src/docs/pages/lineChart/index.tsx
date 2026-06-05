import { Basic } from "./Basic";
import { Curved } from "./Curved";

const BasicSource = require("!!raw-loader!./Basic");
const CurvedSource = require("!!raw-loader!./Curved");

export const lineChart = {
  name: "Line chart",
  path: "/line-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Curved",
      component: <Curved />,
      source: CurvedSource.default.toString()
    }
  ]
};
