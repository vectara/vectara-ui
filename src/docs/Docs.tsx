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
  VuiAppContent,
  VuiSpacer
} from "../lib";
import { HeaderLogo } from "./components/HeaderLogo";
import { sections, pathToExampleMap } from "./pages";
import { Example } from "./components/Example";

const Page = () => {
  const location = useLocation();
  const { name, examples } = pathToExampleMap[location.pathname];

  return (
    <VuiAppContent>
      <VuiTitle size="m">
        <h2>{name}</h2>
      </VuiTitle>

      <VuiSpacer size="m" />

      {examples.map(({ name: exampleName, component, source }) => (
        <Example key={name} name={exampleName} component={component} source={source} />
      ))}
    </VuiAppContent>
  );
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

      <VuiAppLayout navItems={sections}>
        <Page />
      </VuiAppLayout>
    </Router>
  );
};
