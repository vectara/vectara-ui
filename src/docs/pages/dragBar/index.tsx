import { HorizontalSplit } from "./HorizontalSplit";

const HorizontalSplitSource = require("!!raw-loader!./HorizontalSplit");

export const dragBar = {
  name: "Drag bar",
  path: "/dragBar",
  examples: [
    {
      name: "Horizontal split",
      component: <HorizontalSplit />,
      source: HorizontalSplitSource.default.toString()
    }
  ]
};
