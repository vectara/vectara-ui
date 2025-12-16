import { VuiBadge, VuiTooltip } from "../../../lib";
import "./maxWidth.scss";

export const MaxWidth = () => {
  return (
    <VuiTooltip tip="This text will get truncated">
      <VuiBadge color="primary" className="maxWidthBadge">
        This text will get truncated
      </VuiBadge>
    </VuiTooltip>
  );
};
