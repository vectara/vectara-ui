import { BiError } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiSideList } from "../sideList/VuiSideList";
import { VuiSideListButton } from "../sideList/VuiSideListButton";

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
    <VuiSideList className={className} data-testid={dataTestId} {...rest}>
      {steps.map((step) => {
        const { id, title, isActive, hasErrors, icon, onSelect } = step;
        return (
          <VuiSideListButton
            key={id}
            isActive={isActive}
            onClick={() => onSelect()}
            data-testid={step["data-testid"] ?? `${dataTestId}-step-${id}`}
            icon={icon}
            append={
              hasErrors && (
                <VuiIcon size="s" color="danger" data-testid={`studioAgentSectionError-${id}`}>
                  <BiError />
                </VuiIcon>
              )
            }
          >
            {title}
          </VuiSideListButton>
        );
      })}
    </VuiSideList>
  );
};
