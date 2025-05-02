import { BiBookOpen, BiHelpCircle, BiSolidRocket, BiSolidWrench } from "react-icons/bi";
import {
  VuiButtonPrimary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiGrid,
  VuiIcon,
  VuiLink,
  VuiPanel,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "../../../lib";
import circles from "./circles.png";
import lines from "./lines.png";

export const Panel = () => {
  return (
    <>
      <VuiGrid columns={2}>
        <VuiPanel
          color="transparent"
          align="bottom"
          actions={
            <VuiFlexContainer wrap>
              <VuiFlexItem>
                <VuiButtonPrimary color="primary" size="l">
                  Try our sample data set
                </VuiButtonPrimary>
              </VuiFlexItem>

              <VuiFlexItem>
                <VuiButtonTertiary color="primary" size="l">
                  Query your own data
                </VuiButtonTertiary>
              </VuiFlexItem>
            </VuiFlexContainer>
          }
        >
          <VuiTitle size="l">
            <h2>Welcome to Vectara</h2>
          </VuiTitle>

          <VuiSpacer size="s" />

          <VuiText size="l">
            <p>
              Retrieval-augmented generation made easy. Get started with our sample data set or query your own data.
            </p>
          </VuiText>
        </VuiPanel>

        <VuiPanel
          icon={
            <VuiIcon isEnclosed color="primary" size="xl">
              <BiSolidWrench />
            </VuiIcon>
          }
        >
          <VuiTitle size="m">
            <h3>Learn how to…</h3>
          </VuiTitle>

          <VuiSpacer size="m" />

          <VuiGrid columns={2}>
            <VuiText size="l">
              <p>
                <VuiLink href="#">Build a proof-of-concept</VuiLink>
              </p>
            </VuiText>

            <VuiText size="l">
              <p>
                <VuiLink href="#">Securely deploy Vectara apps</VuiLink>
              </p>
            </VuiText>
          </VuiGrid>

          <VuiSpacer size="s" />

          <VuiGrid columns={2}>
            <VuiText size="l">
              <p>
                <VuiLink href="#">Build a chatbot</VuiLink>
              </p>
            </VuiText>

            <VuiText size="l">
              <p>
                <VuiLink href="#">Engineer prompts</VuiLink>
              </p>
            </VuiText>
          </VuiGrid>

          <VuiSpacer size="s" />

          <VuiGrid columns={2}>
            <VuiText size="l">
              <p>
                <VuiLink href="#">Implement hybrid search</VuiLink>
              </p>
            </VuiText>

            <VuiText size="l">
              <p>
                <VuiLink href="#">See all tutorials</VuiLink>
              </p>
            </VuiText>
          </VuiGrid>
        </VuiPanel>
      </VuiGrid>

      <VuiSpacer size="m" />

      <VuiGrid columns={3}>
        <VuiPanel
          background={lines}
          backgroundScale="height"
          icon={
            <VuiIcon isEnclosed color="primary" size="xl">
              <BiBookOpen />
            </VuiIcon>
          }
          actions={
            <VuiFlexContainer>
              <VuiFlexItem>
                <VuiButtonTertiary noPadding color="primary" size="l">
                  Docs
                </VuiButtonTertiary>
              </VuiFlexItem>

              <VuiFlexItem>
                <VuiButtonTertiary color="primary" size="l">
                  API reference
                </VuiButtonTertiary>
              </VuiFlexItem>
            </VuiFlexContainer>
          }
        >
          <VuiTitle size="m">
            <h3>Read the docs</h3>
          </VuiTitle>
        </VuiPanel>

        <VuiPanel
          icon={
            <VuiIcon isEnclosed color="primary" size="xl">
              <BiHelpCircle />
            </VuiIcon>
          }
        >
          <VuiTitle size="m">
            <h3>Get help</h3>
          </VuiTitle>

          <VuiSpacer size="s" />

          <VuiText size="l">
            <p>
              Email us at <a href="#">feedback@vectara.com</a>, post on our <a href="#">forums</a>, or visit our{" "}
              <a href="#">Discord</a>.
            </p>
          </VuiText>
        </VuiPanel>

        <VuiPanel
          background={circles}
          backgroundScale="width"
          icon={
            <VuiIcon isEnclosed color="primary" size="xl">
              <BiSolidRocket />
            </VuiIcon>
          }
          actions={
            <VuiButtonPrimary color="primary" size="l">
              Schedule demo
            </VuiButtonPrimary>
          }
        >
          <VuiTitle size="m">
            <h3>Schedule a demo</h3>
          </VuiTitle>

          <VuiSpacer size="s" />

          <VuiText size="l">
            <p>Our team will show you how you can solve your business's GenAI problems.</p>
          </VuiText>
        </VuiPanel>
      </VuiGrid>
    </>
  );
};
