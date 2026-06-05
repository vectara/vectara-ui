import { Basic } from "./Basic";

const BasicSource = require("!!raw-loader!./Basic");

export const composedChart = {
  name: "Composed chart",
  path: "/composed-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    }
  ]
};
