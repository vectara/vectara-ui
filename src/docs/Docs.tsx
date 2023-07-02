import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import { categories, Example as ExampleType } from "./pages";
import { Example } from "./components/Example";

const Page = ({ name, examples }: { name: string; examples: ExampleType[] }) => (
  <VuiAppContent>
    <VuiTitle size="m">
      <h2>{name}</h2>
    </VuiTitle>

    <VuiSpacer size="m" />

    <>
      {examples.map(({ name: exampleName, component, source }) => (
        <Example key={`example-${exampleName}`} name={exampleName} component={component} source={source} />
      ))}
    </>
  </VuiAppContent>
);

export const Docs = () => {
  const routes: React.ReactNode[] = [];

  categories.forEach(({ pages }) => {
    pages.map(({ name, path, examples }) => {
      routes.push(<Route key={name} path={path} element={<Page name={name} examples={examples} />} />);
    });
  });

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

      <VuiAppLayout navItems={categories}>
        <Routes>
          {routes}
          <Route path="*" element={<Navigate replace to={categories[0].pages[0].path} />} />
        </Routes>
      </VuiAppLayout>
    </Router>
  );
};
