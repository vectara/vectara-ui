import { BiHelpCircle } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { Props as TooltipProps, VuiTooltip } from "./Tooltip";

type Props = Omit<TooltipProps, "children"> & {
  color?: "danger" | "warning" | "success" | "subdued";
  icon?: React.ReactNode;
};

export const VuiInfoTooltip = (props: Props) => {
  const { icon, color = "subdued", ...rest } = props;
  return (
    <VuiTooltip {...rest}>
      <VuiIcon color={color} size="s">
        {icon ? icon : <BiHelpCircle />}
      </VuiIcon>
    </VuiTooltip>
  );
};
