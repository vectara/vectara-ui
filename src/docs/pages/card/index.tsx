import { Card } from "./Card";
import { Scrollable } from "./Scrollable";
import { Accordion } from "./Accordion";

const CardSource = require("!!raw-loader!./Card");
const ScrollableSource = require("!!raw-loader!./Scrollable");
const AccordionSource = require("!!raw-loader!./Accordion");

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
      name: "Accordion",
      component: <Accordion />,
      source: AccordionSource.default.toString()
    }
  ]
};
