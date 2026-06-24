import { useState } from "react";
import { VuiIcon, VuiIconButton, VuiPopover, VuiTooltip } from "../../../lib";
import { BiCaretDown } from "react-icons/bi";

export const TooltipButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      padding
      anchorSide="left"
      button={
        <VuiTooltip tip="Options">
          <VuiIconButton
            aria-label="Example button"
            icon={
              <VuiIcon>
                <BiCaretDown />
              </VuiIcon>
            }
            color="neutral"
          />
        </VuiTooltip>
      }
    >
      <div>Content</div>
    </VuiPopover>
  );
};
