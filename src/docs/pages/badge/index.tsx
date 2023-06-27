import { BadgeColors } from "./BadgeColors";
import { ClickableBadges } from "./ClickableBadges";

const BadgeColorsSource = require("!!raw-loader!./BadgeColors");
const ClickableBadgesSource = require("!!raw-loader!./ClickableBadges");

export const badge = {
  name: "Badge",
  path: "/badge",
  examples: [
    {
      name: "Colors",
      component: <BadgeColors />,
      source: BadgeColorsSource.default.toString()
    },
    {
      name: "Clickable badges",
      component: <ClickableBadges />,
      source: ClickableBadgesSource.default.toString()
    }
  ]
};
