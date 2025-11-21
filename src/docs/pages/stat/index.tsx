import { Stat } from "./Stat";
import { InCards } from "./InCards";

const StatSource = require("!!raw-loader!./Stat");
const InCardsSource = require("!!raw-loader!./InCards");

export const stat = {
  name: "Stat",
  path: "/stat",
  examples: [
    {
      name: "Basic stat",
      component: <Stat />,
      source: StatSource.default.toString()
    },
    {
      name: "Cards layout",
      component: <InCards />,
      source: InCardsSource.default.toString()
    }
  ]
};
