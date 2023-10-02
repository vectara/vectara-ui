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
  VuiIcon,
  VuiHorizontalRule
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
                        We solely intend this library for internal use by{" "}
                        <VuiLink href="http://vectara.com/">Vectara</VuiLink>. Vectara, Inc. reserves all rights. For
                        more information, see the{" "}
                        <VuiLink href="https://github.com/vectara/vectara-ui/blob/main/README.md">README</VuiLink> and{" "}
                        <VuiLink href="https://github.com/vectara/vectara-ui/blob/main/NO_LICENSE">NO_LICENSE</VuiLink>.
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

                <VuiSpacer size="m" />
                <VuiHorizontalRule />
                <VuiSpacer size="m" />

                <VuiTitle size="s">
                  <h3>Dependencies</h3>
                </VuiTitle>

                <VuiSpacer size="s" />

                <VuiText>
                  <ul>
                    <li>
                      <strong>
                        <VuiLink href="https://react-icons.github.io/react-icons/icons?name=bi">BoxIcons</VuiLink>
                      </strong>{" "}
                      for icons
                    </li>

                    <li>
                      <strong>
                        <VuiLink href="https://prismjs.com/">PrismJS</VuiLink>
                      </strong>{" "}
                      for syntax highlighting
                    </li>
                  </ul>
                </VuiText>
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
