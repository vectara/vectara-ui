import { useState } from "react";
import { BiLink, BiLock, BiMessageRounded, BiPencil, BiShow, BiSolidMagicWand } from "react-icons/bi";
import { VuiStepNavigator, StepNavigatorSteps } from "../../../lib";

const steps: StepNavigatorSteps = [
  { id: "branding", title: "Branding", icon: <BiPencil />, isComplete: true },
  { id: "welcome", title: "Welcome", icon: <BiMessageRounded />, isComplete: true },
  { id: "prompts", title: "Suggested prompts", icon: <BiSolidMagicWand />, hasErrors: true },
  { id: "events", title: "Event visibility", icon: <BiShow /> },
  { id: "access", title: "Access & SSO", icon: <BiLock /> },
  { id: "url", title: "Public URL", icon: <BiLink /> }
];

export const BasicStepNavigator = () => {
  const [activeStep, setActiveStep] = useState(1);

  return <VuiStepNavigator steps={steps} activeStep={activeStep} onStepChange={(index) => setActiveStep(index)} />;
};
