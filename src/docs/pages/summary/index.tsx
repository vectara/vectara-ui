import { Summary } from "./Summary";
const SummarySource = require("!!raw-loader!./Summary");

export const summary = {
  name: "Summary",
  path: "/summary",
  examples: [
    {
      component: <Summary />,
      source: SummarySource.default.toString()
    }
  ]
};
