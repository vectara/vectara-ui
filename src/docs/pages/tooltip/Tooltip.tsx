import { BiEdit } from "react-icons/bi";
import { VuiButtonPrimary, VuiIcon, VuiTooltip } from "../../../lib";

export const Tooltip = () => {
  return (
    <VuiTooltip tip="Watchers will be notified of your changes and an audit trail will be created.">
      <VuiButtonPrimary
        icon={
          <VuiIcon>
            <BiEdit />
          </VuiIcon>
        }
        color="neutral"
        href="https://www.vectara.com"
      >
        Edit
      </VuiButtonPrimary>
    </VuiTooltip>
  );
};
