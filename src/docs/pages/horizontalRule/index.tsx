import { HorizontalRule } from "./HorizontalRule";
const HorizontalRuleSource = require("!!raw-loader!./HorizontalRule");

export const horizontalRule = {
  name: "HorizontalRule",
  path: "/horizontalRule",
  examples: [
    {
      component: <HorizontalRule />,
      source: HorizontalRuleSource.default.toString()
    }
  ]
};
