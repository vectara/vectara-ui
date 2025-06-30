import { Tooltip } from "./Tooltip";

const TooltipSource = require("!!raw-loader!./Tooltip");

export const tooltip = {
  name: "Tooltip",
  path: "/tooltip",
  examples: [
    {
      name: "Tooltip",
      component: <Tooltip />,
      source: TooltipSource.default.toString()
    }
  ]
};
