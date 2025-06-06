import { Panel } from "./Panel";
const PanelSource = require("!!raw-loader!./Panel");

export const panel = {
  name: "Panel",
  path: "/panel",
  examples: [
    {
      component: <Panel />,
      source: PanelSource.default.toString()
    }
  ]
};
