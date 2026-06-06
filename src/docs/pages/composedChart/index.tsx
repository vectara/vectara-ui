import { Basic } from "./Basic";
import { FormattedAxes } from "./FormattedAxes";

const BasicSource = require("!!raw-loader!./Basic");
const FormattedAxesSource = require("!!raw-loader!./FormattedAxes");

export const composedChart = {
  name: "Composed chart",
  path: "/composed-chart",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Formatted axes",
      component: <FormattedAxes />,
      source: FormattedAxesSource.default.toString()
    }
  ]
};
