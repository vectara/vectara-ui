import { useState } from "react";
import { VuiStepsVertical, StepsVertical } from "../../../lib";
import { BiChat, BiChip, BiCog, BiInfoCircle, BiWrench } from "react-icons/bi";

export const VerticalSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps: StepsVertical = [
    {
      id: "general",
      icon: <BiInfoCircle />,
      title: "General",
      hasErrors: true,
      isActive: currentStep === 0,
      onSelect: () => setCurrentStep(0)
    },
    {
      id: "model",
      icon: <BiChip />,
      title: "Model",
      isActive: currentStep === 1,
      onSelect: () => setCurrentStep(1)
    },
    {
      id: "abilities",
      icon: <BiWrench />,
      title: "Abilities",
      isActive: currentStep === 2,
      onSelect: () => setCurrentStep(2)
    },
    {
      id: "instructions",
      icon: <BiChat />,
      title: "Instructions",
      isActive: currentStep === 3,
      onSelect: () => setCurrentStep(3)
    },
    {
      id: "advanced",
      icon: <BiCog />,
      title: "Advanced",
      isActive: currentStep === 4,
      onSelect: () => setCurrentStep(4)
    }
  ];

  return (
    <div style={{ maxWidth: "300px" }}>
      <VuiStepsVertical steps={steps} />
    </div>
  );
};
