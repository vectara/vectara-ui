import { ProgressBar } from "./ProgressBar";
const ProgressBarSource = require("!!raw-loader!./ProgressBar");

export const progressBar = {
  name: "Progress Bar",
  path: "/progressBar",
  examples: [
    {
      component: <ProgressBar />,
      source: ProgressBarSource.default.toString()
    }
  ]
};
