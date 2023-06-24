import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import {
  VuiAppHeader,
  VuiButtonIcon,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiTitle,
  VuiAppLayout,
  VuiAppContent
} from "../lib";
import { HeaderLogo } from "./components/HeaderLogo";
import { pages, pathToExampleMap } from "./pages";

const Page = () => {
  const location = useLocation();
  const example = pathToExampleMap[location.pathname];
  return <VuiAppContent>{example}</VuiAppContent>;
};

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

      <VuiAppLayout navItems={pages}>
        <Page />
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
