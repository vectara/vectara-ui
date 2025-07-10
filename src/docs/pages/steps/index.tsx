import { BasicSteps } from "./BasicSteps";
import { InteractiveSteps } from "./InteractiveSteps";
import { StepStatuses } from "./StepStatuses";
import { StepSizes } from "./StepSizes";
import { CustomSteps } from "./CustomSteps";

const BasicStepsSource = require("!!raw-loader!./BasicSteps");
const InteractiveStepsSource = require("!!raw-loader!./InteractiveSteps");
const StepStatusesSource = require("!!raw-loader!./StepStatuses");
const StepSizesSource = require("!!raw-loader!./StepSizes");
const CustomStepsSource = require("!!raw-loader!./CustomSteps");

export const steps = {
  name: "Steps",
  path: "/steps",
  examples: [
    {
      name: "Basic steps",
      component: <BasicSteps />,
      source: BasicStepsSource.default.toString()
    },
    {
      name: "Interactive steps",
      component: <InteractiveSteps />,
      source: InteractiveStepsSource.default.toString()
    },
    {
      name: "Step statuses",
      component: <StepStatuses />,
      source: StepStatusesSource.default.toString()
    },
    {
      name: "Step sizes",
      component: <StepSizes />,
      source: StepSizesSource.default.toString()
    },
    {
      name: "Custom icons & values",
      component: <CustomSteps />,
      source: CustomStepsSource.default.toString()
    }
  ]
};
