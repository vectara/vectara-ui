import { Select } from "./Select";
const SelectSource = require("!!raw-loader!./Select");

export const select = {
  name: "Select",
  path: "/select",
  example: {
    component: <Select />,
    source: SelectSource.default.toString()
  }
};
