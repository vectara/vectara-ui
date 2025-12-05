import { BiEdit } from "react-icons/bi";
import { VuiButtonPrimary, VuiIcon, VuiSpacer, VuiToggle, VuiTooltip } from "../../../lib";
import { useState } from "react";

export const Tooltip = () => {
  const [usePortal, setUsePortal] = useState(false);

  return (
    <>
      <VuiToggle checked={usePortal} onChange={(e) => setUsePortal(e.target.checked)} label="Use portal" />

      <VuiSpacer size="m" />

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
    </>
  );
};
