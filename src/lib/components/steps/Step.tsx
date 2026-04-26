import classNames from "classnames";
import { ReactNode } from "react";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { StepSize, StepStatus } from "./types";

const statusToClassMap: Record<StepStatus, string> = {
  complete: "complete",
  current: "current",
  incomplete: "incomplete",
  warning: "warning",
  danger: "danger"
};

export type StepProps = {
  title: React.ReactNode;
  status?: StepStatus;
  subTitle?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ["data-testid"]?: string;
  size?: StepSize;
  stepNode: ReactNode;
};

export const VuiStep = ({
  title,
  status = "incomplete",
  subTitle,
  onClick,
  stepNode,
  size = "s",
  className,
  "data-testid": dataTestId
}: StepProps) => {
  const stepContainerClasses = classNames("vuiStep", className);

  const numberClasses = classNames("vuiStep__number", `vuiStep__number--${statusToClassMap[status]}`, {
    [`vuiStep__number--${size}`]: size
  });

  const titleClasses = classNames("vuiStep__title", {
    "vuiStep__title--current": status === "current"
  });

  const subTitleClasses = classNames("vuiStep__subTitle", {
    "vuiStep__subTitle--current": status === "current"
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!onClick) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  const stepContent = (
    <>
      <div className="vuiSteps__circleWrapper">
        <div className={numberClasses}>{stepNode}</div>
      </div>

      <div className="vuiSteps__contentWrapper">
        <VuiFlexContainer direction="column" alignItems="center" spacing="xs">
          <VuiFlexItem grow={false}>
            <VuiText size="s" className={titleClasses}>
              <div className="vuiStep__titleText">{title}</div>
            </VuiText>
            {subTitle && <div className={subTitleClasses}>{subTitle}</div>}
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    </>
  );

  return (
    <button
      className={stepContainerClasses}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      type="button"
      aria-current={status === "current" ? "step" : undefined}
      data-testid={dataTestId}
      data-status={status}
    >
      {stepContent}
    </button>
  );
};
