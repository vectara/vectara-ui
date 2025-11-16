import { Card } from "./Card";
import { Highlight } from "./Highlight";
import { BodyOverflowHidden } from "./BodyOverflowHidden";

const CardSource = require("!!raw-loader!./Card");
const HighlightSource = require("!!raw-loader!./Highlight");
const BodyOverflowHiddenSource = require("!!raw-loader!./BodyOverflowHidden");

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
      name: "Body Overflow Hidden",
      component: <BodyOverflowHidden />,
      source: BodyOverflowHiddenSource.default.toString()
    }
  ]
};
