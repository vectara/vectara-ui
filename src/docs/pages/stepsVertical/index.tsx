import { VerticalSteps } from "./VerticalSteps";

const VerticalStepsSource = require("!!raw-loader!./VerticalSteps");

export const stepsVertical = {
  name: "Vertical Steps",
  path: "/verticalSteps",
  examples: [
    {
      name: "Vertical steps",
      component: <VerticalSteps />,
      source: VerticalStepsSource.default.toString()
    }
  ]
};
