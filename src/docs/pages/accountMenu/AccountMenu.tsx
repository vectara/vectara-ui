import { useState } from "react";
import { VuiAccountMenu, VuiButtonSecondary, VuiIcon, VuiOptionsList, VuiPopover } from "../../../lib";
import { BiSolidUser } from "react-icons/bi";

const options = [
  { value: "edit", label: "Update profile" },
  { value: "signOut", label: "Sign out" }
];

export const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <VuiButtonSecondary
          color="accent"
          size="m"
          icon={
            <VuiIcon size="m">
              <BiSolidUser />
            </VuiIcon>
          }
        >
          email@email.com
        </VuiButtonSecondary>
      }
    >
      <VuiAccountMenu
        info={[
          { title: "Email", value: "email@email.com" },
          { title: "Account number", value: "1234567890" }
        ]}
      >
        <VuiOptionsList
          onSelectOption={(value) => {
            alert(`Selected ${value}`);
          }}
          options={options}
        />
      </VuiAccountMenu>
    </VuiPopover>
  );
};
