import { BiLinkExternal } from "react-icons/bi";
import {
  VuiTitle,
  VuiAppContent,
  VuiSpacer,
  VuiCard,
  VuiFlexContainer,
  VuiFlexItem,
  VuiText,
  VuiLink,
  VuiIcon
} from "../lib";

export const Home = () => {
  return (
    <VuiAppContent padding="l">
      <VuiFlexContainer alignItems="center" justifyContent="center">
        <VuiFlexItem className="homeCard">
          <VuiCard
            footer={
              <>
                <VuiFlexContainer alignItems="start" justifyContent="center">
                  <VuiFlexItem shrink={false} grow={false}>
                    <VuiText size="l">
                      <p>✨</p>
                    </VuiText>
                  </VuiFlexItem>

                  <VuiFlexItem grow={1}>
                    <VuiText size="m">
                      <p>The Vectara UI Library is a React component library built with TypeScript and SCSS.</p>
                    </VuiText>
                  </VuiFlexItem>
                </VuiFlexContainer>

                <VuiSpacer size="m" />

                <VuiFlexContainer alignItems="start" justifyContent="center">
                  <VuiFlexItem shrink={false} grow={false}>
                    <VuiText size="l">
                      <p>🚨</p>
                    </VuiText>
                  </VuiFlexItem>

                  <VuiFlexItem grow={1}>
                    <VuiText size="m">
                      <p>
                        We solely intend it for internal use by <VuiLink href="http://vectara.com/">Vectara</VuiLink>,
                        so use at your own risk!
                      </p>
                    </VuiText>
                  </VuiFlexItem>
                </VuiFlexContainer>

                <VuiSpacer size="m" />

                <VuiFlexContainer alignItems="start" justifyContent="center">
                  <VuiFlexItem shrink={false} grow={false}>
                    <VuiText size="l">
                      <p>🙌</p>
                    </VuiText>
                  </VuiFlexItem>

                  <VuiFlexItem grow={1}>
                    <VuiText size="m">
                      <p>
                        That said, we welcome bug reports and feature requests on our{" "}
                        <VuiLink href="https://github.com/vectara/vectara-ui" target="_blank">
                          GitHub repo{" "}
                          <VuiIcon inline size="s">
                            <BiLinkExternal />
                          </VuiIcon>
                        </VuiLink>
                        .
                      </p>
                    </VuiText>
                  </VuiFlexItem>
                </VuiFlexContainer>
              </>
            }
          >
            <VuiTitle size="m">
              <h2>Vectara UI Library</h2>
            </VuiTitle>
          </VuiCard>
        </VuiFlexItem>
      </VuiFlexContainer>
    </VuiAppContent>
  );
};
