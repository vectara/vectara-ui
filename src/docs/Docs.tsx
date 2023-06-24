import { BrowserRouter as Router } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import {
  VuiAppHeader,
  VuiButtonIcon,
  VuiFlexContainer,
  VuiFlexItem,
  // VuiHorizontalRule,
  VuiIcon,
  VuiTitle,
  VuiAppLayout
} from "../lib";
import { HeaderLogo } from "./HeaderLogo";

export const Docs = () => {
  return (
    <Router>
      <VuiAppHeader
        left={
          <VuiFlexContainer spacing="m" alignItems="center">
            <VuiFlexItem grow={false}>
              <HeaderLogo />
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiTitle size="xs">
                <h1>
                  <strong>Vectara UI Library</strong>
                </h1>
              </VuiTitle>
            </VuiFlexItem>
          </VuiFlexContainer>
        }
        right={
          <VuiButtonIcon
            href="https://github.com/vectara/vectara-ui"
            target="_blank"
            color="normal"
            icon={
              <VuiIcon>
                <BiLogoGithub />
              </VuiIcon>
            }
          />
        }
      />

      <VuiAppLayout
        navItems={[
          {
            type: "section",
            title: "Components",
            items: [
              {
                type: "link",
                title: "Buttons",
                path: "/buttons"
              }
            ]
          },
          {
            type: "section",
            title: "Utils",
            items: [
              {
                type: "link",
                title: "Truncate",
                path: "/truncate"
              }
            ]
          }
        ]}
      >
        Content
      </VuiAppLayout>
    </Router>
  );
};

// // Routes
// <VuiContent>
//   <VuiTitle>{/* title */}</VuiTitle>
//   <VuiSpacer size="m" />
//   <VuiText>{/* description */}</VuiText>

//   <VuiSpacer size="m" />
//   <VuiHorizontalRule />
//   <VuiSpacer size="m" />

//   <VuiTitle size="s">{/* example */}</VuiTitle>
//   <VuiSpacer size="m" />
//   <VuiText>{/* example description */}</VuiText>

// </VuiContent>
