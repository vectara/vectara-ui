import { Popover } from "./Popover";
import { IconButton } from "./IconButton";

const PopoverSource = require("!!raw-loader!./Popover");
const IconButtonSource = require("!!raw-loader!./IconButton");

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
    }
  ]
};
