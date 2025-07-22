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
  disabled: "disabled",
  warning: "warning",
  danger: "danger",
  loading: "loading"
};

export type VuiStepProps = {
  title: React.ReactNode;
  status?: StepStatus;
  subTitle?: React.ReactNode;
  onClick?: () => void;
  value?: string | number;
  icon?: ReactNode;
  className?: string;
  ["data-testid"]?: string;
};

type StepProps = Omit<VuiStepProps, "step" | "icon"> & {
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
  const isClickable = onClick && status !== "disabled";

  const stepContainerClasses = classNames("vuiStep", className, {
    "vuiStep--clickable": isClickable
  });

  const numberClasses = classNames("vuiStep__number", `vuiStep__number--${statusToClassMap[status]}`, {
    "vuiStep__number--clickable": isClickable,
    [`vuiStep__number--${size}`]: size
  });

  const titleClasses = classNames("vuiStep__title", {
    "vuiStep__title--current": status === "current"
  });

  const handleClick = () => {
    if (isClickable) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isClickable && (event.key === "Enter" || event.key === " ")) {
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
            {subTitle && <div className="vuiStep__content">{subTitle}</div>}
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <button
        className={stepContainerClasses}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        type="button"
        aria-current={status === "current" ? "step" : undefined}
        data-testid={dataTestId}
      >
        {stepContent}
      </button>
    );
  }

  return (
    <div className={stepContainerClasses} aria-current={status === "current" ? "step" : undefined}>
      {stepContent}
    </div>
  );
};
