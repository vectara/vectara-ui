import { Summary } from "./Summary";
import { Rtl } from "./Rtl";

const SummarySource = require("!!raw-loader!./Summary");
const RtlSource = require("!!raw-loader!./Rtl");

export const summary = {
  name: "Summary",
  path: "/summary",
  examples: [
    {
      component: <Summary />,
      source: SummarySource.default.toString()
    },
    {
      name: "Right-to-left languages",
      component: <Rtl />,
      source: RtlSource.default.toString()
    }
  ]
};
