import { Card } from "./Card";
const CardSource = require("!!raw-loader!./Card");

export const card = {
  name: "Card",
  path: "/card",
  examples: [
    {
      component: <Card />,
      source: CardSource.default.toString()
    }
  ]
};
