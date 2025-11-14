import { WithLabel } from "./WithLabel";
const WithLabelSource = require("!!raw-loader!./WithLabel");

export const checkbox = {
  name: "Checkbox",
  path: "/checkbox",
  example: {
    component: <WithLabel />,
    source: WithLabelSource.default.toString()
  }
};
