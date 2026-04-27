import classNames from "classnames";
import { StepVerticalStatus } from "./types";
import { VuiIcon } from "../icon/Icon";
import { StepStatus } from "../steps/types";
import { ICON_COLOR } from "../icon/types";

const statusToColor: Record<StepStatus, (typeof ICON_COLOR)[number]> = {
  complete: "success",
  current: "primary",
  incomplete: "subdued",
  warning: "warning",
  danger: "danger"
};

const statusToClassMap: Record<StepVerticalStatus, string> = {
  complete: "complete",
  incomplete: "incomplete",
  warning: "warning",
  danger: "danger"
};

export type Props = {
  title: React.ReactNode;
  status: StepVerticalStatus;
  isActive?: boolean;
  onClick: () => void;
  index: number;
  icon?: React.ReactNode;
  ["data-testid"]?: string;
};

export const VuiStepVertical = ({ title, status, isActive, onClick, index, icon, ...rest }: Props) => {
  const classes = classNames("vuiStepVertical", `vuiStepVertical--${statusToClassMap[status]}`, {
    "vuiStepVertical-isActive": isActive
  });

  const finalIcon = (
    <div className="vuiStepVerticalContainer__icon">
      {icon && (
        <VuiIcon size="s" type="token" color={statusToColor[status ?? "incomplete"]}>
          {icon}
        </VuiIcon>
      )}
    </div>
  );

  return (
    <button className={classes} onClick={onClick} {...rest}>
      <div className="vuiStepVertical__index">{index}.</div>
      <div className="vuiStepVertical__content">
        <div>{title}</div>
      </div>
      {finalIcon}
    </button>
  );
};
