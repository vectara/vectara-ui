import { Timeline } from "./Timeline";
const TimelineSource = require("!!raw-loader!./Timeline");

export const timeline = {
  name: "Timeline",
  path: "/timeline",
  example: {
    component: <Timeline />,
    source: TimelineSource.default.toString()
  }
};
