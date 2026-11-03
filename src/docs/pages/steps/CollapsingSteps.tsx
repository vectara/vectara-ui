import { useState } from "react";
import { VuiSteps, Steps, StepStatus } from "../../../lib";

const stepTitles = [
  "Choose a plan",
  "Create an account",
  "Verify email",
  "Invite teammates",
  "Connect data",
  "Configure indexing",
  "Test queries",
  "Set permissions",
  "Review billing",
  "Launch"
];

export const CollapsingSteps = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const getStepStatus = (stepIndex: number): StepStatus => {
    if (currentStep > stepIndex) return "complete";
    if (currentStep === stepIndex) return "current";
    return "incomplete";
  };

  const steps: Steps = stepTitles.map((title, index) => ({
    title,
    status: getStepStatus(index),
    onClick: () => setCurrentStep(index)
  }));

  // Narrow the window to see the steps collapse into a step navigator when they no longer fit.
  return <VuiSteps steps={steps} />;
};
