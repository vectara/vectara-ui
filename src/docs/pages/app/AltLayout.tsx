import { VuiAppLayout, VuiHorizontalRule, VuiLink, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";
import { BiCreditCard, BiGroup, BiHome, BiKey, BiLayer, BiRightArrowAlt } from "react-icons/bi";

export const AltLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VuiAppLayout
      navItems={[
        {
          iconBefore: <BiHome />,
          name: "Overview",
          path: "/"
        },
        {
          iconBefore: <BiLayer />,
          name: "Corpora",
          path: "/app",
          pages: [
            { name: "Recently used" },
            { name: "Corpus 1", path: "/" },
            { name: "Corpus 2", path: "/" },
            { name: "Corpus 3", path: "/" },
            { name: "Corpus 4 with a really long name", path: "/" },
            { name: "Corpus 5", path: "/" },
            { name: "Corpus 6", path: "/" },
            { name: "Corpus 7", path: "/" },
            { name: "View all", path: "/", iconBefore: <BiRightArrowAlt /> }
          ]
        },
        { iconBefore: <BiKey />, name: "API keys", path: "/" },
        { iconBefore: <BiGroup />, name: "Authentication", path: "/" },
        { iconBefore: <BiCreditCard />, name: "Team", path: "/" }
      ]}
      navContent={
        <>
          <VuiSpacer size="l" />
          <VuiHorizontalRule />
          <VuiSpacer size="l" />
          <VuiText>
            <p>
              <VuiTextColor color="subdued">
                Made by{" "}
                <VuiLink href="https://vectara.com/" target="_blank">
                  Vectara
                </VuiLink>
              </VuiTextColor>
            </p>
          </VuiText>
        </>
      }
    >
      {children}
    </VuiAppLayout>
  );
};
