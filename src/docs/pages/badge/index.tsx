import { BadgeColors } from "./BadgeColors";
const BadgeColorsSource = require("!!raw-loader!./BadgeColors");

export const badge = {
  name: "Badge",
  path: "/badge",
  examples: [
    {
      name: "Colors",
      component: <BadgeColors />,
      source: BadgeColorsSource.default.toString()
    }
  ]
};
