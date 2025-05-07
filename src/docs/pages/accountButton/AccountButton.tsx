import { BiLogOut, BiUser } from "react-icons/bi";
import { OptionListItem, VuiAccountButton, VuiCopyButton, VuiFlexContainer, VuiFlexItem, VuiIcon } from "../../../lib";

export const AccountButton = () => {
  const options: OptionListItem<string>[] = [
    {
      value: "edit",
      label: "Manage account",
      color: "primary",
      testId: "profileOption",
      icon: (
        <VuiIcon>
          <BiUser />
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

  return <VuiAccountButton userName="Falcor" email="falcor@neverendingstory.com" options={options} info={info} />;
};
