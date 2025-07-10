import { ItemsInput } from "./ItemsInput";

const ItemsInputSource = require("!!raw-loader!./ItemsInput");

export const itemsInput = {
  name: "Items Input",
  path: "/itemsInput",
  examples: [
    {
      component: <ItemsInput />,
      source: ItemsInputSource.default.toString()
    }
  ]
};
