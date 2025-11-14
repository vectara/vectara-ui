import { WithLabel } from "./WithLabel";
const WithLabelSource = require("!!raw-loader!./WithLabel");

export const radioButton = {
  name: "Radio Button",
  path: "/radioButton",
  example: {
    component: <WithLabel />,
    source: WithLabelSource.default.toString()
  }
};
