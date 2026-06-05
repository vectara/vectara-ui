import { Basic } from "./Basic";
import { Donut } from "./Donut";
import { Unlabeled } from "./Unlabeled";

const BasicSource = require("!!raw-loader!./Basic");
const DonutSource = require("!!raw-loader!./Donut");
const UnlabeledSource = require("!!raw-loader!./Unlabeled");

export const pieChart = {
  name: "Pie chart",
  path: "/pie-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Donut",
      component: <Donut />,
      source: DonutSource.default.toString()
    },
    {
      name: "Unlabeled",
      component: <Unlabeled />,
      source: UnlabeledSource.default.toString()
    }
  ]
};
