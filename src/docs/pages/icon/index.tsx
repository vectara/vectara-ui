import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { InlineText } from "./InlineText";

const SizesSource = require("!!raw-loader!./Sizes");
const ColorsSource = require("!!raw-loader!./Colors");
const InlineTextSource = require("!!raw-loader!./InlineText");

export const icon = {
  name: "Icon",
  path: "/icon",
  examples: [
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    },
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    },
    {
      name: "Inline Text",
      component: <InlineText />,
      source: InlineTextSource.default.toString()
    }
  ]
};
