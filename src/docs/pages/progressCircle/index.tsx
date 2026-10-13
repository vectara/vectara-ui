import { ProgressCircle } from "./ProgressCircle";
const ProgressCircleSource = require("!!raw-loader!./ProgressCircle");

export const progressCircle = {
  name: "Progress Circle",
  path: "/progressCircle",
  example: {
    component: <ProgressCircle />,
    source: ProgressCircleSource.default.toString()
  }
};
