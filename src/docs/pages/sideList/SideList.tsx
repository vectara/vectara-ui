import { useState } from "react";
import { BiAlarm, BiError } from "react-icons/bi";
import { VuiIcon, VuiSideList, VuiSideListButton } from "../../../lib";

export const SideList = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [hasIcon, setHasIcon] = useState(true);
  const [hasAppend, setHasAppend] = useState(true);

  return (
    <div style={{ maxWidth: "300px" }}>
      <VuiSideList>
        <VuiSideListButton onClick={() => setIsSelected((prev) => !prev)} isActive={isSelected}>
          Click me to toggle active state
        </VuiSideListButton>

        <VuiSideListButton href="http://www.vectara.com">I'm a link</VuiSideListButton>

        <VuiSideListButton onClick={() => setHasIcon((prev) => !prev)} icon={hasIcon && <BiAlarm />}>
          Set notification time
        </VuiSideListButton>

        <VuiSideListButton
          onClick={() => setHasAppend((prev) => !prev)}
          append={
            hasAppend && (
              <VuiIcon color="danger" size="s">
                <BiError />
              </VuiIcon>
            )
          }
        >
          Appended content
        </VuiSideListButton>
      </VuiSideList>
    </div>
  );
};
