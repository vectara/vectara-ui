import { useState } from "react";
import classNames from "classnames";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
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
  size?: "m" | "l";
  onStepChange?: (index: number, step: StepNavigatorStep) => void;
  onNext?: (index: number, step: StepNavigatorStep) => void;
  onPrevious?: (index: number, step: StepNavigatorStep) => void;
  onSelect?: (index: number, step: StepNavigatorStep) => void;
  className?: string;
  "data-testid"?: string;
};

export const VuiStepNavigator = ({
  steps,
  activeStep,
  showStepCount = true,
  size = "l",
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
      <VuiButtonSecondary
        className="vuiStepNavigator__sideButton"
        color="neutral"
        solid
        size={size}
        icon={
          <VuiIcon>
            <BiChevronLeft />
          </VuiIcon>
        }
        onClick={goPrevious}
        isDisabled={prevDisabled}
        aria-label="Previous step"
        data-testid={dataTestId ? `${dataTestId}-previous` : undefined}
      />

      <div className="vuiStepNavigator__center">
        <VuiPopover
          className="vuiStepNavigator__popover"
          anchorSide="center"
          anchorOffsetY={8}
          padding="none"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          button={
            <VuiButtonSecondary
              color="neutral"
              solid
              size={size}
              fullWidth
              truncate
              icon={<VuiIcon color="primary">{current.icon}</VuiIcon>}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              data-testid={dataTestId ? `${dataTestId}-trigger` : undefined}
            >
              <span className="vuiStepNavigator__triggerLabel">
                <span className="vuiStepNavigator__triggerTitle">{current.title}</span>

                {showStepCount && <span className="vuiStepNavigator__triggerCount"> · {stepLabel}</span>}

                <span
                  className={classNames("vuiStepNavigator__caret", {
                    "vuiStepNavigator__caret--open": isOpen
                  })}
                >
                  <VuiIcon size={size === "l" ? "m" : "s"} color="subdued">
                    <BiChevronDown />
                  </VuiIcon>
                </span>
              </span>
            </VuiButtonSecondary>
          }
        >
          {menu}
        </VuiPopover>
      </div>

      <VuiButtonSecondary
        className="vuiStepNavigator__sideButton"
        color="neutral"
        solid
        size={size}
        icon={
          <VuiIcon>
            <BiChevronRight />
          </VuiIcon>
        }
        onClick={goNext}
        isDisabled={nextDisabled}
        aria-label="Next step"
        data-testid={dataTestId ? `${dataTestId}-next` : undefined}
      />
    </div>
  );
};
