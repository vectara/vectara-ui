import { StatList } from "./StatList";

const StatListSource = require("!!raw-loader!./StatList");

export const statList = {
  name: "Stat List",
  path: "/statList",
  examples: [
    {
      name: "StatList",
      component: <StatList />,
      source: StatListSource.default.toString()
    }
  ]
};
