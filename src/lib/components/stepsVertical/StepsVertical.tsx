import classNames from "classnames";
import { Props as StepVerticalProps, VuiStepVertical } from "./StepVertical";
import { BiCheck, BiError, BiSolidHand } from "react-icons/bi";

export type { StepVerticalStatus } from "./types";
export type StepsVertical = Omit<StepVerticalProps, "index" | "icon">[];

type Props = {
  steps: StepsVertical;
  className?: string;
  "data-testid"?: string;
};

export const VuiStepsVertical = ({ steps, className, "data-testid": dataTestId, ...rest }: Props) => {
  const classes = classNames("vuiStepsVertical", className);

  return (
    <div className={classes} data-testid={dataTestId} {...rest}>
      {steps.map((step, index) => {
        const icon =
          step.status === "complete" ? (
            <BiCheck />
          ) : step.status === "danger" ? (
            <BiError />
          ) : step.status === "warning" ? (
            <BiSolidHand />
          ) : null;

        const stepContainerClasses = classNames("vuiStepVerticalContainer", {
          "vuiStepVerticalContainer-isActive": step.isActive
        });

        return (
          <div className={stepContainerClasses} key={index}>
            <VuiStepVertical
              title={step.title}
              status={step.status}
              isActive={step.isActive}
              onClick={step.onClick}
              data-testid={step["data-testid"] ?? `${dataTestId}-step-${index}`}
              index={index + 1}
              icon={icon}
            />
          </div>
        );
      })}
    </div>
  );
};
