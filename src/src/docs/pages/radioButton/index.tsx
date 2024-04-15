import { WithLabel } from "./WithLabel";
const WithLabelSource = require("!!raw-loader!./WithLabel");

export const radioButton = {
  name: "Radio Button",
  path: "/radioButton",
  examples: [
    {
      component: <WithLabel />,
      source: WithLabelSource.default.toString()
    }
  ]
};
