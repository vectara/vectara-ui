import { createContext, useContext, ReactNode, useMemo, useEffect } from "react";
import { LinkProps } from "../link/types";
import { LIGHT_THEME, DARK_THEME, Theme, toStyle } from "./Colors";

type LinkProvider = (linkConfig: LinkProps) => JSX.Element;
type PathProvider = () => string;

interface VuiContextType {
  createLink: LinkProvider;
  getPath: PathProvider;
  DrawerTitle: keyof JSX.IntrinsicElements;
  getThemeStyle: (theme: "dark" | "light") => Record<string, string>;
}

const VuiContext = createContext<VuiContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
  linkProvider?: LinkProvider;
  pathProvider?: PathProvider;
  drawerTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme?: Theme;
};

export const VuiContextProvider = ({
  children,
  linkProvider,
  pathProvider,
  drawerTitle = "h2",
  theme = LIGHT_THEME
}: Props) => {
  const createLink = (linkConfig: LinkProps) => {
    if (linkProvider) return linkProvider(linkConfig);

    const { className, href, onClick, children, ref, ...rest } = linkConfig;

    return (
      <a className={className} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  };

  const getPath = () => {
    return pathProvider ? pathProvider() : window.location.pathname;
  };

  const DrawerTitle = drawerTitle as keyof JSX.IntrinsicElements;

  const cssVariables = useMemo(() => {
    // Map the JS properties (camelCase) to CSS variables (kebab-case)
    return toStyle(theme);
  }, [theme]);

  useEffect(() => {
    // Apply the CSS variables to the document root
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [cssVariables]);

  const getThemeStyle = (theme: "dark" | "light") => {
    if (theme === "dark") {
      return toStyle(DARK_THEME);
    }

    return toStyle(LIGHT_THEME);
  };

  return (
    <VuiContext.Provider value={{ createLink, getPath, DrawerTitle, getThemeStyle }}>{children}</VuiContext.Provider>
  );
};

export const useVuiContext = () => {
  const context = useContext(VuiContext);
  if (context === undefined) {
    throw new Error("useVuiContext must be used within a VuiContextProvider");
  }
  return context;
};
