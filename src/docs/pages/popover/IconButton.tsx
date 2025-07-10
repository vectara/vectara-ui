import { useState } from "react";
import { VuiIcon, VuiIconButton, VuiPopover } from "../../../lib";
import { BiCaretDown } from "react-icons/bi";

export const IconButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      padding
      anchorSide="left"
      button={
        <VuiIconButton
          aria-label="Example button"
          icon={
            <VuiIcon>
              <BiCaretDown />
            </VuiIcon>
          }
          color="neutral"
        />
      }
    >
      <div>Content</div>
    </VuiPopover>
  );
};
