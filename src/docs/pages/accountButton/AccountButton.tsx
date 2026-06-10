import { useRef } from "react";
import { BiLogOut, BiTransferAlt, BiUser } from "react-icons/bi";
import {
  OptionListItem,
  VuiAccountButton,
  AccountButtonHandle,
  VuiButtonSecondary,
  VuiCopyButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon
} from "../../../lib";

export const AccountButton = () => {
  const accountButtonRef = useRef<AccountButtonHandle>(null);

  const options: OptionListItem<string>[] = [
    {
      value: "switch",
      label: "Switch accounts",
      color: "primary",
      testId: "switchOption",
      icon: (
        <VuiIcon>
          <BiTransferAlt />
        </VuiIcon>
      )
    },
    {
      value: "signOut",
      label: "Sign out",
      color: "primary",
      testId: "signOutOption",
      icon: (
        <VuiIcon>
          <BiLogOut />
        </VuiIcon>
      )
    }
  ];

  const info: { title: string; value: React.ReactNode }[] = [
    {
      title: "Customer ID",
      value: (
        <VuiFlexContainer spacing="xs" alignItems="center">
          <VuiFlexItem grow={false}>6327476328432</VuiFlexItem>

          <VuiFlexItem>
            <VuiCopyButton size="xs" value="6327476328432" />
          </VuiFlexItem>
        </VuiFlexContainer>
      )
    }
  ];

  return (
    <VuiAccountButton
      ref={accountButtonRef}
      userName="Falcor"
      email="falcor@neverendingstory.com"
      options={options}
      info={info}
      after={
        <div style={{ paddingTop: "12px" }}>
          <VuiButtonSecondary
            fullWidth
            size="s"
            color="neutral"
            onClick={() => accountButtonRef.current?.closeMenu()}
            icon={
              <VuiIcon>
                <BiUser />
              </VuiIcon>
            }
          >
            Manage account
          </VuiButtonSecondary>
        </div>
      }
    />
  );
};
