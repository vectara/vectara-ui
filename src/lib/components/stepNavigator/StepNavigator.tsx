import { ReactNode, forwardRef, useState } from "react";
import classNames from "classnames";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiPopover } from "../popover/Popover";
import { StepVertical, VuiStepsVertical } from "../stepsVertical/StepsVertical";

// A step shares the StepsVertical shape, minus the fields the navigator owns:
// active state comes from `activeStep` and selection is dispatched via callbacks.
export type StepNavigatorStep = Omit<StepVertical, "isActive" | "onSelect">;

export type StepNavigatorSteps = StepNavigatorStep[];

type Props = {
  steps: StepNavigatorSteps;
  activeStep: number;
  showStepCount?: boolean;
  onStepChange?: (index: number, step: StepNavigatorStep) => void;
  onNext?: (index: number, step: StepNavigatorStep) => void;
  onPrevious?: (index: number, step: StepNavigatorStep) => void;
  onSelect?: (index: number, step: StepNavigatorStep) => void;
  className?: string;
  "data-testid"?: string;
};

type TriggerProps = {
  icon: ReactNode;
  title: string;
  stepLabel: string;
  showStepCount: boolean;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  "data-testid"?: string;
};

// Center pill that displays the current step and toggles the dropdown. Receives
// `isSelected` and `onClick` from VuiPopover, which clones it as its trigger.
const StepNavigatorTrigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ icon, title, stepLabel, showStepCount, isSelected, onClick, "data-testid": dataTestId }, ref) => (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      aria-haspopup="listbox"
      aria-expanded={Boolean(isSelected)}
      data-testid={dataTestId}
      className={classNames("vuiStepNavigator__trigger", {
        "vuiStepNavigator__trigger--open": isSelected
      })}
    >
      <VuiIcon size="s" color="primary">
        {icon}
      </VuiIcon>

      <span className="vuiStepNavigator__triggerTitle">{title}</span>

      {showStepCount && <span className="vuiStepNavigator__triggerCount"> · {stepLabel}</span>}

      <span
        className={classNames("vuiStepNavigator__caret", {
          "vuiStepNavigator__caret--open": isSelected
        })}
      >
        <VuiIcon size="s" color="subdued">
          <BiChevronDown />
        </VuiIcon>
      </span>
    </button>
  )
);

export const VuiStepNavigator = ({
  steps,
  activeStep,
  showStepCount = true,
  onStepChange,
  onNext,
  onPrevious,
  onSelect,
  className,
  "data-testid": dataTestId
}: Props) => {
  const clamp = (index: number) => Math.max(0, Math.min(steps.length - 1, index));

  const [isOpen, setIsOpen] = useState(false);

  const active = clamp(activeStep);
  const current = steps[active];

  const commit = (index: number) => {
    const nextIndex = clamp(index);
    setIsOpen(false);
    onStepChange?.(nextIndex, steps[nextIndex]);
  };

  const goPrevious = () => {
    if (active <= 0) return;
    onPrevious?.(active - 1, steps[active - 1]);
    commit(active - 1);
  };

  const goNext = () => {
    if (active >= steps.length - 1) return;
    onNext?.(active + 1, steps[active + 1]);
    commit(active + 1);
  };

  const select = (index: number) => {
    onSelect?.(index, steps[index]);
    commit(index);
  };

  const prevDisabled = active <= 0;
  const nextDisabled = active >= steps.length - 1;
  const stepLabel = `Step ${active + 1} of ${steps.length}`;

  const verticalSteps = steps.map((step, index) => ({
    ...step,
    isActive: index === active,
    onSelect: () => select(index)
  }));

  const menu = (
    <VuiStepsVertical
      className="vuiStepNavigator__menu"
      steps={verticalSteps}
      data-testid={dataTestId ? `${dataTestId}-menu` : undefined}
    />
  );

  return (
    <div className={classNames("vuiStepNavigator", className)} data-testid={dataTestId}>
      <button
        type="button"
        className="vuiStepNavigator__sideButton"
        onClick={goPrevious}
        disabled={prevDisabled}
        aria-label="Previous step"
        data-testid={dataTestId ? `${dataTestId}-previous` : undefined}
      >
        <VuiIcon size="m">
          <BiChevronLeft />
        </VuiIcon>
      </button>

      <div className="vuiStepNavigator__center">
        <VuiPopover
          className="vuiStepNavigator__popover"
          anchorSide="center"
          anchorOffsetY={8}
          padding="none"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          button={
            <StepNavigatorTrigger
              icon={current.icon}
              title={current.title}
              stepLabel={stepLabel}
              showStepCount={showStepCount}
              data-testid={dataTestId ? `${dataTestId}-trigger` : undefined}
            />
          }
        >
          {menu}
        </VuiPopover>
      </div>

      <button
        type="button"
        className="vuiStepNavigator__sideButton"
        onClick={goNext}
        disabled={nextDisabled}
        aria-label="Next step"
        data-testid={dataTestId ? `${dataTestId}-next` : undefined}
      >
        <VuiIcon size="m">
          <BiChevronRight />
        </VuiIcon>
      </button>
    </div>
  );
};
