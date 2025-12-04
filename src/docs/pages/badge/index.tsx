import { BadgeColors } from "./BadgeColors";
import { ClickableBadges } from "./ClickableBadges";
import { DismissibleBadges } from "./DismissibleBadges";
import { Selection } from "./Selection";

const BadgeColorsSource = require("!!raw-loader!./BadgeColors");
const ClickableBadgesSource = require("!!raw-loader!./ClickableBadges");
const DismissibleBadgesSource = require("!!raw-loader!./DismissibleBadges");
const SelectionSource = require("!!raw-loader!./Selection");

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
    },
    {
      name: "Dismissible badges",
      component: <DismissibleBadges />,
      source: DismissibleBadgesSource.default.toString()
    },
    {
      name: "Selection",
      component: <Selection />,
      source: SelectionSource.default.toString()
    }
  ]
};
