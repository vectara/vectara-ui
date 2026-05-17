import { BiError } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiMenuList } from "../menuList/VuiMenuList";
import { VuiMenuListButton } from "../menuList/VuiMenuListButton";

export type { StepVerticalStatus } from "./types";
export type StepsVertical = {
  id: string;
  title: string;
  isActive?: boolean;
  hasErrors?: boolean;
  icon: React.ReactNode;
  onSelect: () => void;
  "data-testid"?: string;
}[];

type Props = {
  steps: StepsVertical;
  className?: string;
  "data-testid"?: string;
};

export const VuiStepsVertical = ({ steps, className, "data-testid": dataTestId, ...rest }: Props) => {
  return (
    <VuiMenuList className={className} data-testid={dataTestId} {...rest}>
      {steps.map((step) => {
        const { id, title, isActive, hasErrors, icon, onSelect } = step;
        const stepTestId = step["data-testid"] ?? `${dataTestId}-step-${id}`;
        return (
          <VuiMenuListButton
            key={id}
            isActive={isActive}
            onClick={() => onSelect()}
            data-testid={stepTestId}
            icon={icon}
            append={
              hasErrors && (
                <VuiIcon size="s" color="danger" data-testid={`${stepTestId}-error`}>
                  <BiError />
                </VuiIcon>
              )
            }
          >
            {title}
          </VuiMenuListButton>
        );
      })}
    </VuiMenuList>
  );
};
