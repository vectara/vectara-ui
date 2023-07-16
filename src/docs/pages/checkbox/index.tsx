import { WithLabel } from "./WithLabel";
const WithLabelSource = require("!!raw-loader!./WithLabel");

export const checkbox = {
  name: "Checkbox",
  path: "/checkbox",
  examples: [
    {
      component: <WithLabel />,
      source: WithLabelSource.default.toString()
    }
  ]
};
