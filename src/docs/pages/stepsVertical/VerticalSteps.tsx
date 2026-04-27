import { useState } from "react";
import { VuiStepsVertical, StepsVertical } from "../../../lib";

export const VerticalSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps: StepsVertical = [
    {
      title: "General",
      status: "danger",
      isActive: currentStep === 0,
      onClick: () => setCurrentStep(0)
    },
    {
      title: "Model",
      status: "complete",
      isActive: currentStep === 1,
      onClick: () => setCurrentStep(1)
    },
    {
      title: "Abilities",
      status: "incomplete",
      isActive: currentStep === 2,
      onClick: () => setCurrentStep(2)
    },
    {
      title: "Instructions",
      status: "incomplete",
      isActive: currentStep === 3,
      onClick: () => setCurrentStep(3)
    },
    {
      title: "Advanced",
      status: "warning",
      isActive: currentStep === 4,
      onClick: () => setCurrentStep(4)
    }
  ];

  return <VuiStepsVertical steps={steps} />;
};
