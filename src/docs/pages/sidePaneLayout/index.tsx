import { Overview } from "./Overview";

const OverviewSource = require("!!raw-loader!./Overview");

export const sidePaneLayout = {
  name: "Side pane layout",
  path: "/sidePaneLayout",
  examples: [
    {
      name: "Overview",
      component: <Overview />,
      source: OverviewSource.default.toString()
    }
  ]
};
