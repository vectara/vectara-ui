import { ProgressBar } from "./ProgressBar";
const ProgressBarSource = require("!!raw-loader!./ProgressBar");

export const progressBar = {
  name: "Progress Bar",
  path: "/progressBar",
  example: {
    component: <ProgressBar />,
    source: ProgressBarSource.default.toString()
  }
};
