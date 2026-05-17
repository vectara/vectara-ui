import { useState } from "react";
import { BiAlarm, BiError } from "react-icons/bi";
import { VuiIcon, VuiMenuList, VuiMenuListButton } from "../../../lib";

export const MenuList = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [hasIcon, setHasIcon] = useState(true);
  const [hasAppend, setHasAppend] = useState(true);

  return (
    <div style={{ maxWidth: "300px" }}>
      <VuiMenuList>
        <VuiMenuListButton onClick={() => setIsSelected((prev) => !prev)} isActive={isSelected}>
          Click me to toggle active state
        </VuiMenuListButton>

        <VuiMenuListButton href="http://www.vectara.com">I'm a link</VuiMenuListButton>

        <VuiMenuListButton onClick={() => setHasIcon((prev) => !prev)} icon={hasIcon && <BiAlarm />}>
          Set notification time
        </VuiMenuListButton>

        <VuiMenuListButton
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
        </VuiMenuListButton>

        <VuiMenuListButton href="http://www.vectara.com" disabled>
          I'm a disabled link
        </VuiMenuListButton>

        <VuiMenuListButton onClick={() => alert("You shouldn't be able to see this")} disabled>
          I'm a disabled button
        </VuiMenuListButton>
      </VuiMenuList>
    </div>
  );
};
