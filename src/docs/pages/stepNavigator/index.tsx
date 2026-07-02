import { BasicStepNavigator } from "./BasicStepNavigator";

const BasicStepNavigatorSource = require("!!raw-loader!./BasicStepNavigator");

export const stepNavigator = {
  name: "Step navigator",
  path: "/step-navigator",
  example: {
    component: <BasicStepNavigator />,
    source: BasicStepNavigatorSource.default.toString()
  }
};
