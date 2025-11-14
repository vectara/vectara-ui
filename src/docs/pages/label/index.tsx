import { Label } from "./Label";
const LabelSource = require("!!raw-loader!./Label");

export const label = {
  name: "Label",
  path: "/label",
  example: {
    component: <Label />,
    source: LabelSource.default.toString()
  }
};
