import { useState } from "react";
import { VuiSteps, Steps, StepStatus } from "../../../lib";
import { Subsection } from "../../components/Subsection";

const stepTitles = ["First step", "Second step", "Third step which will wrap to the next line"];

export const StepSizes = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const getStepStatus = (stepIndex: number): StepStatus => {
    if (currentStep > stepIndex) return "complete";
    if (currentStep === stepIndex) return "current";
    return "incomplete";
  };

  const basicSteps: Steps = stepTitles.map((title, index) => ({
    title,
    status: getStepStatus(index),
    onClick: () => setCurrentStep(index)
  }));

  const sizes = [
    {
      size: "xs" as const,
      description: "Size xs"
    },
    {
      size: "s" as const,
      description: "Size s"
    },
    {
      size: "m" as const,
      description: "Size m"
    }
  ];

  return (
    <>
      {sizes.map(({ size, description }) => (
        <Subsection key={size} title={description}>
          <VuiSteps steps={basicSteps} size={size} />
        </Subsection>
      ))}
    </>
  );
};
