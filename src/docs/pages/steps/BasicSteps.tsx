import { VuiSteps, VuiStepProps } from "../../../lib";

export const BasicSteps = () => {
  const basicSteps: VuiStepProps[] = [
    {
      title: "Completed step",
      status: "complete",
      "data-testid": "customDataTestId"
    },
    {
      title: "Selected step",
      status: "current"
    },
    {
      title: "Incomplete step which will wrap to the next line",
      status: "incomplete"
    },
    {
      title: "Disabled step",
      status: "disabled"
    }
  ];

  return <VuiSteps steps={basicSteps} data-testid="steps" />;
};
