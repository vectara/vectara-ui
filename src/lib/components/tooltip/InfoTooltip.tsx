import { BiHelpCircle } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { Props as TooltipProps, VuiTooltip } from "./Tooltip";

type Props = Omit<TooltipProps, "children">;

export const VuiInfoTooltip = (props: Props) => {
  return (
    <VuiTooltip {...props}>
      <VuiIcon color="subdued" size="s">
        <BiHelpCircle />
      </VuiIcon>
    </VuiTooltip>
  );
};
