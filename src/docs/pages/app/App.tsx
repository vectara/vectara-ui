import { useState } from "react";
import {
  AppContentPadding,
  VuiAppContent,
  VuiAppHeader,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiGrid,
  VuiSelect,
  VuiSpacer,
  VuiTab,
  VuiTabs,
  VuiTitle,
  VuiToggle
} from "../../../lib";
import { Layout } from "./Layout";
import { AltLayout } from "./AltLayout";
import "./appExample.scss";

const paddingOptions = [
  { text: "none", value: "none" },
  { text: "xs", value: "xs" },
  { text: "s", value: "s" },
  { text: "m", value: "m" },
  { text: "l", value: "l" },
  { text: "xl", value: "xl" }
];

export const App = () => {
  const [isExampleVisible, setIsExampleVisible] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [padding, setPadding] = useState<AppContentPadding>("xl");
  const [isAltLayout, setIsAltLayout] = useState<boolean>(false);
  const [isAlternateHeader, setIsAlternateHeader] = useState<boolean>(false);
  const [isDarkHeader, setIsDarkHeader] = useState<boolean>(false);

  const content = (
    <VuiAppContent className="appExampleContent" fullWidth={isFullWidth} padding={padding}>
      <VuiButtonSecondary color="primary" onClick={() => setIsFullWidth(!isFullWidth)}>
        {isFullWidth ? "Constrain width" : "Expand width"}
      </VuiButtonSecondary>

      <VuiSpacer size="l" />

      <VuiSelect
        options={paddingOptions}
        value={padding}
        onChange={(event) => setPadding(event.target.value as AppContentPadding)}
      />

      <VuiSpacer size="l" />

      <VuiFlexContainer alignItems="center" direction="column">
        <VuiFlexItem>
          <VuiAppContent padding="none">
            Content can go inside content. This is particularly useful when you need to make the parent content
            full-width, but you want to constrain the width of the child content and then center it.
          </VuiAppContent>
        </VuiFlexItem>
      </VuiFlexContainer>
    </VuiAppContent>
  );

  const DynamicLayout = isAltLayout ? AltLayout : Layout;

  const headerLeftContent = (
    <VuiFlexContainer alignItems="center" spacing="xl">
      <VuiTitle size="xs">
        <h1>App example</h1>
      </VuiTitle>

      <VuiToggle label="Alternate side nav" checked={isAltLayout} onChange={() => setIsAltLayout(!isAltLayout)} />

      <VuiToggle
        label="Alternate header layout"
        checked={isAlternateHeader}
        onChange={() => setIsAlternateHeader(!isAlternateHeader)}
      />

      <VuiToggle label="Dark header" checked={isDarkHeader} onChange={() => setIsDarkHeader(!isDarkHeader)} />
    </VuiFlexContainer>
  );

  const headerRightContent = (
    <VuiButtonPrimary className="appExample__close" color="danger" onClick={() => setIsExampleVisible(false)}>
      Close example
    </VuiButtonPrimary>
  );

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsExampleVisible(true)}>
        Show example
      </VuiButtonPrimary>

      {isExampleVisible && (
        <div className="appExample">
          <VuiAppHeader
            className={isDarkHeader ? "darkMode" : ""}
            content={
              isAlternateHeader ? (
                <VuiGrid columns={3}>
                  {headerLeftContent}

                  <VuiTabs className="appExample__tabs" style="enclosed">
                    <VuiTab isActive>Tab 1</VuiTab>
                    <VuiTab>Tab 2</VuiTab>
                  </VuiTabs>

                  {headerRightContent}
                </VuiGrid>
              ) : (
                <VuiFlexContainer fullWidth justifyContent="spaceBetween" alignItems="center">
                  {headerLeftContent}
                  {headerRightContent}
                </VuiFlexContainer>
              )
            }
          />

          <DynamicLayout>{content}</DynamicLayout>
        </div>
      )}
    </>
  );
};
