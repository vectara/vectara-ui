import { Popover } from "./Popover";
import { IconButton } from "./IconButton";
import { TooltipButton } from "./TooltipButton";

const PopoverSource = require("!!raw-loader!./Popover");
const IconButtonSource = require("!!raw-loader!./IconButton");
const TooltipButtonSource = require("!!raw-loader!./TooltipButton");

export const popover = {
  name: "Popover",
  path: "/popover",
  examples: [
    {
      name: "Popover",
      component: <Popover />,
      source: PopoverSource.default.toString()
    },
    {
      name: "Popover with button",
      component: <IconButton />,
      source: IconButtonSource.default.toString()
    },
    {
      name: "Popover with tooltip",
      component: <TooltipButton />,
      source: TooltipButtonSource.default.toString()
    }
  ]
};
