import { useState } from "react";
import { BiLink, BiLock, BiMessageRounded, BiPencil, BiShow, BiSolidMagicWand } from "react-icons/bi";
import { VuiStepNavigator, StepNavigatorSteps } from "../../../lib";

const steps: StepNavigatorSteps = [
  { id: "branding", title: "Branding", subtitle: "Logo & colors", icon: <BiPencil />, status: "complete" },
  { id: "welcome", title: "Welcome", subtitle: "Intro message", icon: <BiMessageRounded />, status: "complete" },
  { id: "prompts", title: "Suggested prompts", subtitle: "Starter questions", icon: <BiSolidMagicWand />, status: "error" },
  { id: "events", title: "Event visibility", subtitle: "What users see", icon: <BiShow /> },
  { id: "access", title: "Access & SSO", subtitle: "Who can sign in", icon: <BiLock /> },
  { id: "url", title: "Public URL", subtitle: "Stable address", icon: <BiLink /> }
];

export const BasicStepNavigator = () => {
  const [activeStep, setActiveStep] = useState(1);

  return <VuiStepNavigator steps={steps} activeStep={activeStep} onStepChange={(index) => setActiveStep(index)} />;
};
