import { Label } from "./Label";
const LabelSource = require("!!raw-loader!./Label");

export const label = {
  name: "Label",
  path: "/label",
  examples: [
    {
      component: <Label />,
      source: LabelSource.default.toString()
    }
  ]
};
