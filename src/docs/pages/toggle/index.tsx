import { Toggle } from "./Toggle";
const ToggleSource = require("!!raw-loader!./Toggle");

export const toggle = {
  name: "Toggle",
  path: "/toggle",
  example: {
    component: <Toggle />,
    source: ToggleSource.default.toString()
  }
};
