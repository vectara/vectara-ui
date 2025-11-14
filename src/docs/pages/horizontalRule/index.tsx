import { HorizontalRule } from "./HorizontalRule";
const HorizontalRuleSource = require("!!raw-loader!./HorizontalRule");

export const horizontalRule = {
  name: "Horizontal Rule",
  path: "/horizontalRule",
  example: {
    component: <HorizontalRule />,
    source: HorizontalRuleSource.default.toString()
  }
};
