import { useRef } from "react";
import classNames from "classnames";
import { BiCheck, BiError, BiSolidHand } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiStep, StepProps } from "./Step";
import { StepSize, StepStatus } from "./types";
import { ICON_COLOR } from "../icon/types";
import { VuiStepNavigator } from "../stepNavigator/StepNavigator";
import { useCollapseOnOverflow } from "../../utils/useCollapseOnOverflow";

export type { StepSize, StepStatus };

export type Steps = Array<Omit<StepProps & { icon?: React.ReactNode }, "stepNode">>;

const statusToColor: Record<StepStatus, (typeof ICON_COLOR)[number]> = {
  complete: "success",
  current: "primary",
  incomplete: "subdued",
  warning: "warning",
  danger: "danger"
};

const getStatusIcon = (step: Steps[number]) =>
  step.icon ??
  (step.status === "complete" ? (
    <BiCheck />
  ) : step.status === "danger" ? (
    <BiError />
  ) : step.status === "warning" ? (
    <BiSolidHand />
  ) : null);

type Props = {
  steps: Steps;
  className?: string;
  size?: StepSize;
  // "auto" swaps in VuiStepNavigator when the steps don't fit horizontally.
  collapse?: "auto" | "never";
  "data-testid"?: string;
};

export const VuiSteps = ({
  steps,
  className,
  size = "s",
  collapse = "auto",
  "data-testid": dataTestId,
  ...rest
}: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const isCollapsed = useCollapseOnOverflow(
    rootRef,
    "vuiSteps",
    collapse === "auto",
    steps.map(({ title, subTitle }) => `${title}|${subTitle}`).join() + size
  );

  const classes = classNames("vuiSteps", className, {
    [`vuiSteps--${size}`]: size,
    "vuiSteps--collapsed": isCollapsed
  });

  const totalSteps = steps.length;

  const currentStepIndex = steps.findIndex((step) => step.status === "current");

  const navigatorSteps = steps.map((step, index) => ({
    id: String(index),
    title: step.title,
    icon: getStatusIcon(step) ?? <span className="vuiSteps__navigatorNumber">{index + 1}</span>,
    isComplete: step.status === "complete",
    hasErrors: step.status === "danger",
    "data-testid": step["data-testid"]
  }));

  return (
    <div className={classes} data-testid={dataTestId} ref={rootRef} {...rest}>
      <div className="vuiSteps__container">
        {steps.map((step, index) => {
          const isFirstStep = index === 0;
          const isLastStep = index === totalSteps - 1;
          const stepContainerClasses = classNames("vuiSteps__stepContainer", {
            "vuiSteps__stepContainer--first": isFirstStep,
            "vuiSteps__stepContainer--last": isLastStep
          });

          const icon = getStatusIcon(step);

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
                data-testid={step["data-testid"] ?? `${dataTestId}-step-${index}`}
                stepNode={
                  icon ? (
                    <VuiIcon color={statusToColor[step.status ?? "incomplete"]} size={size === "xs" ? undefined : size}>
                      {icon}
                    </VuiIcon>
                  ) : size === "xs" ? null : (
                    <span className="vuiStep__numberText">{index + 1}</span>
                  )
                }
                size={size}
                subTitle={step.subTitle}
              />
            </div>
          );
        })}
      </div>

      {isCollapsed && (
        <VuiStepNavigator
          steps={navigatorSteps}
          activeStep={Math.max(0, currentStepIndex)}
          onStepChange={(index) => steps[index].onClick()}
          data-testid={dataTestId ? `${dataTestId}-navigator` : undefined}
        />
      )}
    </div>
  );
};
