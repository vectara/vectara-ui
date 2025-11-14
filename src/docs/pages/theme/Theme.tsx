import {
  BUTTON_COLOR,
  LinkProps,
  VuiButtonPrimary,
  VuiContextProvider,
  VuiFlexContainer,
  VuiFlexItem
} from "../../../lib";
import { Link, useLocation } from "react-router-dom";
import { Subsection } from "../../components/Subsection";
import { toRgb } from "../../../lib/components/context/Colors";

const customTheme = {
  colorAccentShade: "#FF4500",
  colorPrimaryShade: "#4B0082",
  colorSuccessShade: "#458d0fff",
  colorWarningShade: "#FF8C00",
  colorDangerShade: "#930d60ff",
  colorEmptyShade: "#8eb1b4ff",
  colorSubduedShadeRgb: toRgb("#58c0c0ff")
};

export const Theme = () => {
  const location = useLocation();

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
    <VuiContextProvider linkProvider={linkProvider} pathProvider={pathProvider} theme={customTheme} isThemeIsolated>
      <Subsection title="Primary button">
        <VuiFlexContainer>
          {BUTTON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiButtonPrimary color={color}>{color}</VuiButtonPrimary>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>
    </VuiContextProvider>
  );
};
