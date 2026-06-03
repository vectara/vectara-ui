import { Icons } from "./Icons";
import { Sizes } from "./Sizes";

const IconsSource = require("!!raw-loader!./Icons");
const SizesSource = require("!!raw-loader!./Sizes");

export const patch = {
  name: "Patch",
  path: "/patch",
  examples: [
    {
      name: "Icons",
      component: <Icons />,
      source: IconsSource.default.toString()
    },
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    }
  ]
};
