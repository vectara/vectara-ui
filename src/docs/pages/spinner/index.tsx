import { Inline } from "./Inline";
import { Sizes } from "./Sizes";

const InlineSource = require("!!raw-loader!./Inline");
const SizesSource = require("!!raw-loader!./Sizes");

export const spinner = {
  name: "Spinner",
  path: "/spinner",
  examples: [
    {
      name: "Inline",
      component: <Inline />,
      source: InlineSource.default.toString()
    },
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    }
  ]
};
