import { useState } from "react";
import { BiBook, BiCreditCard, BiData, BiKey, BiLineChart, BiLogOut, BiRightArrowAlt, BiUser } from "react-icons/bi";
import {
  VuiAppSideNav,
  VuiAppSideNavLink,
  OptionListItem,
  VuiAccountButton,
  VuiCopyButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiPopover,
  VuiText,
  VuiSpacer,
  VuiSearchInput,
  VuiLink,
  VuiButtonPrimary
} from "../../../lib";

const AccountButton = () => {
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

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<"corpora" | "apiKeys" | "team" | "usage" | "billing" | "docs">(
    "corpora"
  );

  const navContent = (
    <>
      <VuiAppSideNavLink
        name="Corpora"
        iconBefore={<BiData />}
        data-testid="navCorpora"
        onClick={() => setActiveItem("corpora")}
        isSelected={activeItem === "corpora"}
      />

      <VuiAppSideNavLink
        name="API keys"
        iconBefore={<BiKey />}
        data-testid="navApiKeys"
        onClick={() => setActiveItem("apiKeys")}
        isSelected={activeItem === "apiKeys"}
      />

      <VuiAppSideNavLink
        name="Team"
        iconBefore={<BiUser />}
        data-testid="navTeam"
        onClick={() => setActiveItem("team")}
        isSelected={activeItem === "team"}
      />

      <VuiAppSideNavLink
        name="Usage"
        iconBefore={<BiLineChart />}
        data-testid="navUsage"
        onClick={() => setActiveItem("usage")}
        isSelected={activeItem === "usage"}
      />

      <VuiAppSideNavLink
        name="Billing"
        iconBefore={<BiCreditCard />}
        data-testid="navBilling"
        onClick={() => setActiveItem("billing")}
        isSelected={activeItem === "billing"}
      />

      <VuiPopover
        anchorSide="rightUp"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        padding={true}
        header="Documentation"
        button={
          <VuiAppSideNavLink
            name="Docs"
            iconBefore={<BiBook />}
            data-testid="navDocs"
            onClick={() => setActiveItem("docs")}
            isSelected={activeItem === "docs"}
          />
        }
      >
        <div style={{ width: "280px" }}>
          <VuiSearchInput size="m" placeholder="Search docs" />
          <VuiSpacer size="s" />
          <VuiFlexContainer alignItems="center" spacing="l" justifyContent="start">
            <VuiText size="m">
              <VuiLink href="https://docs.vectara.com/docs/rest-api" target="_blank">
                <VuiFlexContainer alignItems="center" spacing="xxs" justifyContent="start">
                  <VuiFlexItem>API reference</VuiFlexItem>
                  <VuiFlexItem>
                    <VuiIcon size="s">
                      <BiRightArrowAlt />
                    </VuiIcon>
                  </VuiFlexItem>
                </VuiFlexContainer>
              </VuiLink>
            </VuiText>

            <VuiText size="m">
              <VuiLink href="https://docs.vectara.com" target="_blank">
                <VuiFlexContainer alignItems="center" spacing="xxs" justifyContent="start">
                  <VuiFlexItem>Docs</VuiFlexItem>
                  <VuiFlexItem>
                    <VuiIcon size="s">
                      <BiRightArrowAlt />
                    </VuiIcon>
                  </VuiFlexItem>
                </VuiFlexContainer>
              </VuiLink>
            </VuiText>
          </VuiFlexContainer>
        </div>
      </VuiPopover>
    </>
  );

  return (
    <>
      <div className="appExampleNav">
        <VuiAppSideNav size="l" canCollapseSelf={false} content={navContent} />

        <div className="appExampleNav__bottom">
          <VuiButtonPrimary color="success" size="m" fullWidth>
            Trial ends in 3 days
          </VuiButtonPrimary>

          <VuiSpacer size="s" />

          <AccountButton />
        </div>
      </div>
      <div className="appExampleLayout">{children}</div>
    </>
  );
};
