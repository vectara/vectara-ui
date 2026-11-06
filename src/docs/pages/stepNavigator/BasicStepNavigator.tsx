import { useState } from "react";
import { BiLink, BiLock, BiMessageRounded, BiPencil, BiShow, BiSolidMagicWand } from "react-icons/bi";
import { VuiSpacer, VuiStepNavigator, VuiToggle, StepNavigatorSteps } from "../../../lib";

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
  const [isMediumSize, setIsMediumSize] = useState(false);

  return (
    <>
      <VuiToggle label="Medium size" checked={isMediumSize} onChange={() => setIsMediumSize(!isMediumSize)} />

      <VuiSpacer size="m" />

      <VuiStepNavigator
        steps={steps}
        activeStep={activeStep}
        size={isMediumSize ? "m" : "l"}
        onStepChange={(index) => setActiveStep(index)}
      />
    </>
  );
};
