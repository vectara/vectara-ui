import { VuiSteps, VuiStepProps } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const StepSizes = () => {
  const basicSteps: VuiStepProps[] = [
    {
      title: "Completed step",
      status: "complete"
    },
    {
      title: "Selected step",
      status: "current"
    },
    {
      title: "Incomplete step which will wrap to the next line",
      status: "incomplete"
    },
    {
      title: "Disabled step",
      status: "disabled"
    }
  ];

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
