import { useState } from "react";
import {
  AppContentPadding,
  VuiAppContent,
  VuiAppHeader,
  VuiAppLayout,
  VuiButtonPrimary,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiHorizontalRule,
  VuiSelect,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";
import "./appExample.scss";
import { BiRightArrowAlt } from "react-icons/bi";

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

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsExampleVisible(true)}>
        Show example
      </VuiButtonPrimary>

      {isExampleVisible && (
        <div className="appExample">
          <VuiAppHeader
            left={
              <VuiTitle size="xs">
                <h1>
                  <strong>App example</strong>
                </h1>
              </VuiTitle>
            }
            right={
              <VuiButtonPrimary color="danger" onClick={() => setIsExampleVisible(false)}>
                Close example
              </VuiButtonPrimary>
            }
          />

          <VuiAppLayout
            navItems={[
              { name: "Overview", path: "/" },
              {
                name: "Corpora",
                path: "/app",
                pages: [
                  { name: "Recent corpora" },
                  { name: "Corpus 1", path: "/" },
                  { name: "Corpus 2", path: "/" },
                  { name: "Corpus 3", path: "/" },
                  { name: "Corpus 4 with a really long name", path: "/" },
                  { name: "Corpus 5", path: "/" },
                  { name: "Corpus 6", path: "/" },
                  { name: "Corpus 7", path: "/" },
                  { name: "See all", path: "/", iconAfter: <BiRightArrowAlt /> }
                ]
              },
              { name: "API keys", path: "/" },
              { name: "Team", path: "/" }
            ]}
            navContent={
              <>
                <VuiSpacer size="l" />
                <VuiHorizontalRule />
                <VuiSpacer size="l" />
                <VuiText>
                  <p>
                    <VuiTextColor color="subdued">Made with love on Terra</VuiTextColor>
                  </p>
                </VuiText>
              </>
            }
          >
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
          </VuiAppLayout>
        </div>
      )}
    </>
  );
};
