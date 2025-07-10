import { VuiSteps, VuiStepProps } from "../../../lib";

export const StepStatuses = () => {
  const statusSteps: VuiStepProps[] = [
    {
      title: "Complete Step",
      subTitle: "This step has been completed",
      status: "complete"
    },
    {
      title: "Current Step",
      subTitle: "This is the active step",
      status: "current"
    },
    {
      title: "Incomplete Step",
      subTitle: "This step is not yet completed",
      status: "incomplete"
    },
    {
      title: "Disabled Step",
      subTitle: "This step is disabled",
      status: "disabled"
    },
    {
      title: "Warning Step",
      subTitle: "This step has a warning",
      status: "warning"
    },
    {
      title: "Danger Step",
      subTitle: "This step has an error",
      status: "danger"
    },
    {
      title: "Loading Step",
      subTitle: "This step is processing",
      status: "loading"
    }
  ];

  return <VuiSteps steps={statusSteps} />;
};
