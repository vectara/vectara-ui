import { Card } from "./Card";
import { Highlight } from "./Highlight";

const CardSource = require("!!raw-loader!./Card");
const HighlightSource = require("!!raw-loader!./Highlight");

export const card = {
  name: "Card",
  path: "/card",
  examples: [
    {
      title: "Cards",
      component: <Card />,
      source: CardSource.default.toString()
    },
    {
      title: "Highlight",
      component: <Highlight />,
      source: HighlightSource.default.toString()
    }
  ]
};
