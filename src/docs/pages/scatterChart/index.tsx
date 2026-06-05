import { Basic } from "./Basic";
import { Dense } from "./Dense";

const BasicSource = require("!!raw-loader!./Basic");
const DenseSource = require("!!raw-loader!./Dense");

export const scatterChart = {
  name: "Scatter chart",
  path: "/scatter-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Dense",
      component: <Dense />,
      source: DenseSource.default.toString()
    }
  ]
};
