import { Inline } from "./Inline";
import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import "./_index.scss";

const InlineSource = require("!!raw-loader!./Inline");
const SizesSource = require("!!raw-loader!./Sizes");
const ColorsSource = require("!!raw-loader!./Colors");

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
    },
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    }
  ]
};
