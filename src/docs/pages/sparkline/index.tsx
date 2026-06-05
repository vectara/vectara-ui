import { Basic } from "./Basic";
import { Inline } from "./Inline";

const BasicSource = require("!!raw-loader!./Basic");
const InlineSource = require("!!raw-loader!./Inline");

export const sparkline = {
  name: "Sparkline",
  path: "/sparkline",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Inline with stats",
      component: <Inline />,
      source: InlineSource.default.toString()
    }
  ]
};
