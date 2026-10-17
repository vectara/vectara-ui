import { createContext, useContext, ReactNode, useMemo, useEffect } from "react";
import { LinkProps } from "../link/types";
import { LIGHT_THEME, DARK_THEME, Theme, toStyle, ChartPaletteName, CHART_PALETTES } from "./Theme";

type LinkProvider = (linkConfig: LinkProps) => JSX.Element;
type PathProvider = () => string;

interface VuiContextType {
  createLink: LinkProvider;
  getPath: PathProvider;
  DrawerTitle: keyof JSX.IntrinsicElements;
  getThemeStyle: (theme: "dark" | "light") => Record<string, string>;
  portalContainer?: HTMLElement;
}

const VuiContext = createContext<VuiContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
  linkProvider?: LinkProvider;
  pathProvider?: PathProvider;
  drawerTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme?: Theme;
  // Selects the chart series colors for every chart within the provider.
  // "accessible" optimizes for color-blind and grayscale legibility; "aesthetic"
  // trades some of that for a vibrant, brand-led look.
  chartPalette?: ChartPaletteName;
  isThemeIsolated?: boolean;
  portalContainer?: HTMLElement;
};

export const VuiContextProvider = ({
  children,
  linkProvider,
  pathProvider,
  drawerTitle = "h2",
  theme = LIGHT_THEME,
  chartPalette = "accessible",
  portalContainer = document.body,
  isThemeIsolated
}: Props) => {
  const createLink = (linkConfig: LinkProps) => {
    if (!linkProvider || linkConfig.download) {
      const { className, href, onClick, children, ref, ...rest } = linkConfig;

      // To support downloads, we must use anchor tags, not a react-router Link.
      return (
        <a className={className} href={href} onClick={onClick} {...rest}>
          {children}
        </a>
      );
    }

    return linkProvider(linkConfig);
  };

  const getPath = () => {
    return pathProvider ? pathProvider() : window.location.pathname;
  };

  const DrawerTitle = drawerTitle as keyof JSX.IntrinsicElements;

  const cssVariables = useMemo(() => {
    // Map the JS properties (camelCase) to CSS variables (kebab-case). The theme
    // takes precedence so it can override individual palette colors.
    return toStyle({ ...CHART_PALETTES[chartPalette].light, ...theme });
  }, [theme, chartPalette]);

  useEffect(() => {
    if (isThemeIsolated) return;

    // Apply the CSS variables to the document root
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [isThemeIsolated, cssVariables]);

  const getThemeStyle = (theme: "dark" | "light") => {
    if (theme === "dark") {
      return toStyle({ ...CHART_PALETTES[chartPalette].dark, ...DARK_THEME });
    }

    return toStyle({ ...CHART_PALETTES[chartPalette].light, ...LIGHT_THEME });
  };

  const themedChildren = isThemeIsolated ? <div style={cssVariables}>{children}</div> : children;

  return (
    <VuiContext.Provider value={{ createLink, getPath, DrawerTitle, getThemeStyle, portalContainer }}>
      {themedChildren}
    </VuiContext.Provider>
  );
};

export const useVuiContext = () => {
  const context = useContext(VuiContext);
  if (context === undefined) {
    throw new Error("useVuiContext must be used within a VuiContextProvider");
  }
  return context;
};
