import { Tooltip } from "./Tooltip";
import { InfoTooltip } from "./InfoTooltip";

const TooltipSource = require("!!raw-loader!./Tooltip");
const InfoTooltipSource = require("!!raw-loader!./InfoTooltip");

export const tooltip = {
  name: "Tooltip",
  path: "/tooltip",
  examples: [
    {
      name: "Tooltip",
      component: <Tooltip />,
      source: TooltipSource.default.toString()
    },
    {
      name: "Info Tooltip",
      component: <InfoTooltip />,
      source: InfoTooltipSource.default.toString()
    }
  ]
};
