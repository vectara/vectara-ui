import { useState } from "react";
import { VuiSteps, Steps, StepStatus } from "../../../lib";

export const InteractiveSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getStepStatus = (
    stepIndex: number,
    completeState: "complete" | "current" | "warning" | "danger"
  ): StepStatus => {
    if (currentStep > stepIndex) return completeState;
    if (currentStep === stepIndex) return "current";
    return "incomplete";
  };

  const dynamicSteps: Steps = [
    {
      title: "Account Setup",
      status: getStepStatus(0, "danger"),
      subTitle: "Create your account",
      onClick: () => setCurrentStep(0)
    },
    {
      title: "Profile Information",
      status: getStepStatus(1, "complete"),
      subTitle: "Add your details",
      onClick: () => setCurrentStep(1)
    },
    {
      title: "Verification",
      status: getStepStatus(2, "danger"),
      subTitle: "Verify your email",
      onClick: () => setCurrentStep(2)
    },
    {
      title: "Complete",
      status: "incomplete",
      subTitle: "Finish setup",
      onClick: () => setCurrentStep(3)
    }
  ];

  return <VuiSteps steps={dynamicSteps} />;
};
