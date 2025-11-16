import { Card } from "./Card";
import { Highlight } from "./Highlight";
import { Scrollable } from "./Scrollable";

const CardSource = require("!!raw-loader!./Card");
const HighlightSource = require("!!raw-loader!./Highlight");
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
      name: "Highlight",
      component: <Highlight />,
      source: HighlightSource.default.toString()
    },
    {
      name: "Scrollable",
      component: <Scrollable />,
      source: ScrollableSource.default.toString()
    }
  ]
};
