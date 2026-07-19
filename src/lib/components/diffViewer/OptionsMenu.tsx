import { useState } from "react";
import { BiCog } from "react-icons/bi";
import { VuiPopover } from "../popover/Popover";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiToggle } from "../toggle/Toggle";

type Props = {
  isWordHighlightEnabled: boolean;
  setIsWordHighlightEnabled: (isWordHighlightEnabled: boolean) => void;
};

export const OptionsMenu = ({ isWordHighlightEnabled, setIsWordHighlightEnabled }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      padding
      anchorSide="right"
      button={
        <VuiIconButton
          aria-label="Options"
          color="neutral"
          icon={
            <VuiIcon>
              <BiCog />
            </VuiIcon>
          }
        />
      }
    >
      <VuiToggle
        label="Highlight words"
        checked={isWordHighlightEnabled}
        onChange={(event) => setIsWordHighlightEnabled(event.target.checked)}
      />
    </VuiPopover>
  );
};
