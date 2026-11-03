import { useState } from "react";
import { VuiSpacer, VuiSteps, VuiText, Steps } from "../../../lib";

export const StepStatuses = () => {
  const [clickedStep, setClickedStep] = useState<string>();

  const statusSteps: Steps = [
    {
      title: "Complete Step",
      subTitle: "This step has been completed",
      status: "complete",
      onClick: () => setClickedStep("Complete Step")
    },
    {
      title: "Current Step",
      subTitle: "This is the active step",
      status: "current",
      onClick: () => setClickedStep("Current Step")
    },
    {
      title: "Incomplete Step",
      subTitle: "This step is not yet completed",
      status: "incomplete",
      onClick: () => setClickedStep("Incomplete Step")
    },
    {
      title: "Warning Step",
      subTitle: "This step has a warning",
      status: "warning",
      onClick: () => setClickedStep("Warning Step")
    },
    {
      title: "Danger Step",
      subTitle: "This step has an error",
      status: "danger",
      onClick: () => setClickedStep("Danger Step")
    }
  ];

  return (
    <>
      <VuiSteps steps={statusSteps} />

      <VuiSpacer size="m" />

      <VuiText>
        <p>Clicked: {clickedStep ?? "None"}</p>
      </VuiText>
    </>
  );
};
