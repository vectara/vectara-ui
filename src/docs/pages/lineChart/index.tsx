import { Basic } from "./Basic";
import { Curved } from "./Curved";
import { Area } from "./Area";
import { StackedArea } from "./StackedArea";

const BasicSource = require("!!raw-loader!./Basic");
const CurvedSource = require("!!raw-loader!./Curved");
const AreaSource = require("!!raw-loader!./Area");
const StackedAreaSource = require("!!raw-loader!./StackedArea");

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
    },
    {
      name: "Area",
      component: <Area />,
      source: AreaSource.default.toString()
    },
    {
      name: "Stacked area",
      component: <StackedArea />,
      source: StackedAreaSource.default.toString()
    }
  ]
};
