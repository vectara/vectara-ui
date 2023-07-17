import { useState } from "react";
import { VuiAccountMenu, VuiButtonSecondary, VuiIcon, VuiOptionsList } from "../../../lib";
import { BiSolidUser } from "react-icons/bi";

const options = [
  { value: "edit", label: "Update profile" },
  { value: "signOut", label: "Sign out" }
];

export const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiAccountMenu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
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
      info={[
        { title: "Email", value: "email@email.com" },
        { title: "Account number", value: "1234567890" }
      ]}
    >
      <VuiOptionsList
        onSelectOption={(value: string) => {
          alert(`Selected ${value}`);
        }}
        options={options}
      />
    </VuiAccountMenu>
  );
};
