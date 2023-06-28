import { Popover } from "./Popover";
const PopoverSource = require("!!raw-loader!./Popover");

export const popovers = {
  name: "Popovers",
  path: "/popovers",
  examples: [
    {
      name: "Popover",
      component: <Popover />,
      source: PopoverSource.default.toString()
    }
  ]
};
