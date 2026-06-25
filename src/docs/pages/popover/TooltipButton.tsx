import { useState } from "react";
import { VuiButtonSecondary, VuiIcon, VuiPopover } from "../../../lib";
import { BiCaretDown } from "react-icons/bi";

export const TooltipButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      padding
      anchorSide="left"
      tooltip="Options"
      button={
        <VuiButtonSecondary
          icon={
            <VuiIcon>
              <BiCaretDown />
            </VuiIcon>
          }
          color="neutral"
        >
          menu
        </VuiButtonSecondary>
      }
    >
      <div>Content</div>
    </VuiPopover>
  );
};
