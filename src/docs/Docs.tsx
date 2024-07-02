import { Link, Navigate, Route, HashRouter as Router, Routes, useLocation } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import {
  VuiAppHeader,
  VuiIconButton,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiTitle,
  VuiAppLayout,
  VuiButtonSecondary,
  VuiContextProvider,
  LinkProps
} from "../lib";
import { HeaderLogo } from "./components/HeaderLogo";
import { categories } from "./pages";
import { Home } from "./Home";
import { Page } from "./Page";
import "./index.scss";

export const Docs = () => {
  return (
    <Router>
      <DocsContent />
    </Router>
  );
};

const DocsContent = () => {
  const location = useLocation();

  const routes: React.ReactNode[] = [];

  categories.forEach(({ pages }) => {
    pages.forEach(({ name, path, examples }) => {
      routes.push(<Route key={name} path={path} element={<Page name={name} examples={examples} />} />);
    });
  });

  const linkProvider = (linkConfig: LinkProps) => {
    const { className, href, onClick, children, ...rest } = linkConfig;

    return (
      <Link className={className} to={href ?? ""} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  };

  const pathProvider = () => {
    return location.pathname;
  };

  return (
    <VuiContextProvider linkProvider={linkProvider} pathProvider={pathProvider}>
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
            aria-label="Vectara UI GitHub repository"
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
    </VuiContextProvider>
  );
};
