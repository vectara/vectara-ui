import { useState } from "react";
import { VuiSteps, VuiStepProps, StepStatus } from "../../../lib";

export const InteractiveSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getStepStatus = (stepIndex: number): StepStatus => {
    if (currentStep > stepIndex) return "complete";
    if (currentStep === stepIndex) return "current";
    return "incomplete";
  };

  const dynamicSteps: VuiStepProps[] = [
    {
      title: "Account Setup",
      status: getStepStatus(0),
      subTitle: "Create your account",
      onClick: () => setCurrentStep(0)
    },
    {
      title: "Profile Information",
      status: getStepStatus(1),
      subTitle: "Add your details",
      onClick: () => setCurrentStep(1)
    },
    {
      title: "Verification",
      status: getStepStatus(2),
      subTitle: "Verify your email",
      onClick: () => setCurrentStep(2)
    },
    {
      title: "Complete",
      status: getStepStatus(3),
      subTitle: "Finish setup",
      onClick: () => setCurrentStep(3)
    }
  ];

  return <VuiSteps steps={dynamicSteps} />;
};
