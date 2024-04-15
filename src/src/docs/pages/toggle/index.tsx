import { Toggle } from "./Toggle";
const ToggleSource = require("!!raw-loader!./Toggle");

export const toggle = {
  name: "Toggle",
  path: "/toggle",
  examples: [
    {
      component: <Toggle />,
      source: ToggleSource.default.toString()
    }
  ]
};
