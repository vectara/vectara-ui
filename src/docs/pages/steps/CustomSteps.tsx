import { useState } from "react";
import { VuiSteps, Steps, StepStatus } from "../../../lib";
import { BiUser, BiCog, BiCheck, BiPlanet, BiRocket, BiStar } from "react-icons/bi";
import { Subsection } from "../../components/Subsection";

const stepDefinitions = [
  {
    title: "User Registration",
    subTitle: "Create your account",
    icon: <BiUser />
  },
  {
    title: "Configuration",
    subTitle: "Set up your preferences",
    icon: <BiCog />
  },
  {
    title: "Verification",
    subTitle: "Verify your email address",
    icon: <BiCheck />
  },
  {
    title: "Explore Features",
    subTitle: "Discover what you can do",
    icon: <BiPlanet />
  },
  {
    title: "Launch Project",
    subTitle: "Start your first project",
    icon: <BiRocket />
  },
  {
    title: "Celebrate Success",
    subTitle: "You're all set!",
    icon: <BiStar />
  }
];

export const CustomSteps = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const getStepStatus = (stepIndex: number): StepStatus => {
    if (currentStep > stepIndex) return "complete";
    if (currentStep === stepIndex) return "current";
    return "incomplete";
  };

  const customIconSteps: Steps = stepDefinitions.map((step, index) => ({
    ...step,
    status: getStepStatus(index),
    onClick: () => setCurrentStep(index)
  }));

  return (
    <>
      <Subsection title="Custom icons">
        <VuiSteps steps={customIconSteps} />
      </Subsection>
    </>
  );
};
