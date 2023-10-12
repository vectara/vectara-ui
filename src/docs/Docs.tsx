import { Navigate, Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import { BiRightArrowAlt, BiLeftArrowAlt, BiLogoGithub } from "react-icons/bi";
import {
  VuiAppHeader,
  VuiIconButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiTitle,
  VuiAppLayout,
  VuiAppContent,
  VuiSpacer,
  VuiButtonSecondary
} from "../lib";
import { HeaderLogo } from "./components/HeaderLogo";
import { categories, Example as ExampleType, paths } from "./pages";
import { Example } from "./components/Example";
import { Home } from "./Home";
import "./index.scss";

const Page = ({ name, examples }: { name: string; examples: ExampleType[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPageIndex = paths.list.findIndex((page) => page.path === location.pathname);

  const navigateToPreviousPage = () => {
    const prevIndex = currentPageIndex === 0 ? paths.list.length - 1 : currentPageIndex - 1;
    navigate(paths.list[prevIndex].path);
  };

  const navigateToNextPage = () => {
    const nextIndex = currentPageIndex === paths.list.length - 1 ? 0 : currentPageIndex + 1;
    navigate(paths.list[nextIndex].path);
  };
  return (
    <VuiAppContent padding="l">
      <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
        <VuiFlexItem grow={false}>
          <VuiTitle size="m">
            <h2>{name}</h2>
          </VuiTitle>
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiFlexContainer alignItems="center" spacing="xxs">
            <VuiFlexItem grow={false}>
              <VuiIconButton
                icon={
                  <VuiIcon>
                    <BiLeftArrowAlt />
                  </VuiIcon>
                }
                color="neutral"
                onClick={() => navigateToPreviousPage()}
              />
            </VuiFlexItem>

            <VuiFlexItem>
              {" "}
              <VuiIconButton
                icon={
                  <VuiIcon>
                    <BiRightArrowAlt />
                  </VuiIcon>
                }
                color="neutral"
                onClick={() => navigateToNextPage()}
              />
            </VuiFlexItem>
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <>
        {examples.map(({ name: exampleName, component, source }) => (
          <Example key={`example-${name}-${exampleName}`} name={exampleName} component={component} source={source} />
        ))}
      </>
    </VuiAppContent>
  );
};

export const Docs = () => {
  const routes: React.ReactNode[] = [];

  categories.forEach(({ pages }) => {
    pages.forEach(({ name, path, examples }) => {
      routes.push(<Route key={name} path={path} element={<Page name={name} examples={examples} />} />);
    });
  });

  return (
    // Fix routing when deployed to GitHub pages (https://vectara.github.io/vectara-ui/).
    <Router basename={process.env.NODE_ENV === "production" ? "/vectara-ui/" : undefined}>
      <VuiAppHeader
        left={
          <VuiFlexContainer spacing="m" alignItems="center">
            <VuiFlexItem grow={false} shrink={false}>
              <HeaderLogo />
            </VuiFlexItem>

            <VuiFlexItem grow={false} shrink={false}>
              <VuiTitle size="xs">
                <h1>
                  <strong>Vectara UI Library</strong>
                </h1>
              </VuiTitle>
            </VuiFlexItem>

            <VuiFlexItem grow={false} shrink={false}>
              <VuiButtonSecondary size="s" color="neutral" href="/">
                Home
              </VuiButtonSecondary>
            </VuiFlexItem>
          </VuiFlexContainer>
        }
        right={
          <VuiIconButton
            href="https://github.com/vectara/vectara-ui"
            target="_blank"
            color="neutral"
            size="m"
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
          <Route path="/" element={<Home />} />
          {routes}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </VuiAppLayout>
    </Router>
  );
};
