import { useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import classNames from "classnames";
import { BiCheck, BiError, BiSolidHand } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiStep, StepProps } from "./Step";
import { StepSize, StepStatus } from "./types";
import { ICON_COLOR } from "../icon/types";
import { VuiStepNavigator } from "../stepNavigator/StepNavigator";

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
  const stepsRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // The horizontal steps stay rendered (hidden) while collapsed, so they can be
  // measured to tell when they fit again without the measurement depending on
  // which layout is showing.
  useLayoutEffect(() => {
    const stepsElement = stepsRef.current;
    if (collapse === "never" || !stepsElement) {
      setIsCollapsed(false);
      return;
    }

    // Allow a pixel of tolerance for subpixel rounding.
    const measure = () => setIsCollapsed(stepsElement.scrollWidth > stepsElement.clientWidth + 1);

    // Step widths change with their content as well as the container's width. Render
    // synchronously so the layouts swap before the next paint instead of a frame later.
    // Swapping doesn't resize the observed elements, so this can't cause a resize loop.
    const resizeObserver = new ResizeObserver(() => flushSync(measure));
    resizeObserver.observe(stepsElement);
    Array.from(stepsElement.children).forEach((child) => resizeObserver.observe(child));
    document.fonts?.ready.then(measure);
    measure();

    return () => resizeObserver.disconnect();
  }, [collapse, steps]);

  const classes = classNames("vuiSteps", className, {
    [`vuiSteps--${size}`]: size
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
    <div className={classes} data-testid={dataTestId} {...rest}>
      <div className="vuiSteps__layout">
        <div
          ref={stepsRef}
          className={classNames("vuiSteps__container", { "vuiSteps__container--measureOnly": isCollapsed })}
        >
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
                      <VuiIcon
                        color={statusToColor[step.status ?? "incomplete"]}
                        size={size === "xs" ? undefined : size}
                      >
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
    </div>
  );
};
