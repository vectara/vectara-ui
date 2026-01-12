import { Card } from "./Card";
import { Scrollable } from "./Scrollable";
import { Expandable } from "./Expandable";
import { SimpleCard } from "./SimpleCard";

const CardSource = require("!!raw-loader!./Card");
const ScrollableSource = require("!!raw-loader!./Scrollable");
const ExpandableSource = require("!!raw-loader!./Expandable");
const SimpleCardSource = require("!!raw-loader!./SimpleCard");

export const card = {
  name: "Card",
  path: "/card",
  examples: [
    {
      name: "Simple card",
      component: <SimpleCard />,
      source: SimpleCardSource.default.toString()
    },
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
