import { Card } from "./Card";
import { Scrollable } from "./Scrollable";
import { Expandable } from "./Expandable";

const CardSource = require("!!raw-loader!./Card");
const ScrollableSource = require("!!raw-loader!./Scrollable");
const ExpandableSource = require("!!raw-loader!./Expandable");

export const card = {
  name: "Card",
  path: "/card",
  examples: [
    {
      name: "Groups",
      component: <Card />,
      source: CardSource.default.toString()
    },
    {
      name: "Scrollable",
      component: <Scrollable />,
      source: ScrollableSource.default.toString()
    },
    {
      name: "Expandable",
      component: <Expandable />,
      source: ExpandableSource.default.toString()
    }
  ]
};
