import { Popover } from "./Popover";
const PopoverSource = require("!!raw-loader!./Popover");

export const popover = {
  name: "Popover",
  path: "/popover",
  examples: [
    {
      name: "Popover",
      component: <Popover />,
      source: PopoverSource.default.toString()
    }
  ]
};
