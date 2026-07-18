import { useMemo, useState } from "react";
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
  VuiBadge,
  VuiText,
  VuiTextColor,
  buildSideNavItems,
  LinkProps,
  VuiTextInput
} from "../lib";
import { HeaderLogo } from "./components/HeaderLogo";
import { categories } from "./pages";
import { Home } from "./Home";
import { Page } from "./Page";

import "./index.scss";

// Baked in at build time from package.json via the REACT_APP_VUI_VERSION env var.
const VUI_VERSION = process.env.REACT_APP_VUI_VERSION;

export const Docs = () => {
  return (
    <Router>
      <DocsContent />
    </Router>
  );
};

const DocsContent = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  // Filter the sidenav down to pages whose name matches the search value.
  const filteredCategories = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return categories;

    return categories.reduce<typeof categories>((matches, category) => {
      const pages = category.pages.filter((page) => page.name.toLowerCase().includes(query));
      if (pages.length > 0) matches.push({ ...category, pages });
      return matches;
    }, []);
  }, [searchValue]);

  const navContent = (
    <>
      <VuiTextInput
        size="s"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className="navSearch"
      />

      {filteredCategories.length > 0 ? (
        buildSideNavItems(filteredCategories)
      ) : (
        <VuiText size="s">
          <p>
            <VuiTextColor color="subdued">No matches</VuiTextColor>
          </p>
        </VuiText>
      )}
    </>
  );

  const routes: React.ReactNode[] = [];

  categories.forEach(({ pages }) => {
    pages.forEach((page) => {
      const { name, path } = page;
      routes.push(<Route key={name} path={path} element={<Page page={page} />} />);
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
                <h1>Vectara UI Library</h1>
              </VuiTitle>
            </VuiFlexItem>

            {VUI_VERSION && (
              <VuiFlexItem grow={false} shrink={false}>
                <VuiBadge color="neutral">{`v${VUI_VERSION}`}</VuiBadge>
              </VuiFlexItem>
            )}

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

      <VuiAppLayout navContent={navContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </VuiAppLayout>
    </VuiContextProvider>
  );
};
