import { useState } from "react";
import { VuiInfoMenu, VuiButtonSecondary, VuiIcon, VuiOptionsList, VuiSpacer, VuiText } from "../../../lib";
import { BiSolidUser } from "react-icons/bi";

const options = [
  { value: "edit", label: "Update profile" },
  { value: "signOut", label: "Sign out" }
];

export const InfoMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiInfoMenu
      data-testid="infoMenu"
      anchorSide="left"
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
        { title: "Account number", value: "1234567890" },
        {
          title: "Account size",
          value: (
            <>
              <VuiText>
                <p>22 MB</p>
              </VuiText>

              <VuiSpacer size="xs" />

              <VuiButtonSecondary size="xs" color="neutral">
                Refresh
              </VuiButtonSecondary>
            </>
          )
        }
      ]}
    >
      <VuiOptionsList
        onSelectOption={(value: string) => {
          alert(`Selected ${value}`);
        }}
        options={options}
        size="l"
      />
    </VuiInfoMenu>
  );
};
