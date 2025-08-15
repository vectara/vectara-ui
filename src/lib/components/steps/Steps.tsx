import classNames from "classnames";
import { BiCheck, BiError, BiSolidHand } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiStep, VuiStepProps } from "./Step";
import { StepSize, StepStatus } from "./types";
import { ICON_COLOR } from "../icon/types";

export type { VuiStepProps, StepSize, StepStatus };

const statusToColor: Record<StepStatus, (typeof ICON_COLOR)[number]> = {
  complete: "success",
  current: "primary",
  incomplete: "subdued",
  disabled: "neutral",
  warning: "warning",
  danger: "danger",
  loading: "accent"
};

type Props = {
  steps: VuiStepProps[];
  className?: string;
  size?: StepSize;
  "data-testid"?: string;
};

export const VuiSteps = ({ steps, className, size = "s", "data-testid": dataTestId, ...rest }: Props) => {
  const classes = classNames("vuiSteps", className, {
    [`vuiSteps--${size}`]: size
  });

  const totalSteps = steps.length;

  const currentStepIndex = steps.findIndex((step) => step.status === "current");

  return (
    <div className={classes} data-testid={dataTestId} {...rest}>
      <div className="vuiSteps__container">
        {steps.map((step, index) => {
          const isFirstStep = index === 0;
          const isLastStep = index === totalSteps - 1;
          const stepContainerClasses = classNames("vuiSteps__stepContainer", {
            "vuiSteps__stepContainer--first": isFirstStep,
            "vuiSteps__stepContainer--last": isLastStep
          });

          const icon =
            step.icon ??
            (step.status === "complete" ? (
              <BiCheck />
            ) : step.status === "danger" ? (
              <BiError />
            ) : step.status === "warning" ? (
              <BiSolidHand />
            ) : null);

          return (
            <div key={index} className={stepContainerClasses}>
              {!isLastStep && (
                <div
                  className={classNames("vuiSteps__connector", {
                    "vuiSteps__connector--complete": index < currentStepIndex
                  })}
                />
              )}

              <VuiStep
                title={step.title}
                status={step.status}
                onClick={step.onClick}
                data-testid={`${dataTestId}-step-${index}`}
                stepNode={
                  step.status === "loading" ? (
                    <div>
                      <VuiSpinner />
                    </div>
                  ) : icon ? (
                    <VuiIcon color={statusToColor[step.status ?? "incomplete"]} size={size === "xs" ? undefined : size}>
                      {icon}
                    </VuiIcon>
                  ) : size === "xs" ? null : (
                    <span className="vuiStep__numberText">{step.value ?? index + 1}</span>
                  )
                }
                size={size}
                subTitle={step.subTitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
