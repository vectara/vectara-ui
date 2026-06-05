import { Basic } from "./Basic";
import { Stacked } from "./Stacked";
import { Horizontal } from "./Horizontal";

const BasicSource = require("!!raw-loader!./Basic");
const StackedSource = require("!!raw-loader!./Stacked");
const HorizontalSource = require("!!raw-loader!./Horizontal");

export const barChart = {
  name: "Bar chart",
  path: "/bar-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Stacked",
      component: <Stacked />,
      source: StackedSource.default.toString()
    },
    {
      name: "Horizontal",
      component: <Horizontal />,
      source: HorizontalSource.default.toString()
    }
  ]
};
