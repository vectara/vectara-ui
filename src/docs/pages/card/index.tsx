import { Card } from "./Card";
import { Scrollable } from "./Scrollable";

const CardSource = require("!!raw-loader!./Card");
const ScrollableSource = require("!!raw-loader!./Scrollable");

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
    }
  ]
};
