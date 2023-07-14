import { CopyButton } from "./CopyButton";
const CopyButtonrSource = require("!!raw-loader!./CopyButton");

export const copyButton = {
  name: "Copy Button",
  path: "/copyButton",
  examples: [
    {
      component: <CopyButton />,
      source: CopyButtonrSource.default.toString()
    }
  ]
};
