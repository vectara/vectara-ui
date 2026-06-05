import { Basic } from "./Basic";
import { Donut } from "./Donut";
import { Unlabeled } from "./Unlabeled";
import { ManyValues } from "./ManyValues";

const BasicSource = require("!!raw-loader!./Basic");
const DonutSource = require("!!raw-loader!./Donut");
const UnlabeledSource = require("!!raw-loader!./Unlabeled");
const ManyValuesSource = require("!!raw-loader!./ManyValues");

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
    },
    {
      name: "Many values",
      component: <ManyValues />,
      source: ManyValuesSource.default.toString()
    }
  ]
};
