import { useState } from "react";
import { VuiButtonSecondary, VuiFlexContainer, VuiFlexItem, VuiSteps, Steps, StepStatus } from "../../../lib";
import { Subsection } from "../../components/Subsection";

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
  return (
    <>
      <Subsection title="Many steps">
        <VuiSteps steps={steps} />
      </Subsection>

      <Subsection title="Sharing a flex row with a neighbor">
        <VuiFlexContainer fullWidth justifyContent="spaceBetween" alignItems="center" spacing="s">
          <VuiFlexItem grow={false}>
            <VuiSteps steps={steps.slice(0, 4)} />
          </VuiFlexItem>

          <VuiFlexItem grow={false} shrink={false}>
            <VuiButtonSecondary color="neutral" size="s">
              Save and exit
            </VuiButtonSecondary>
          </VuiFlexItem>
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
