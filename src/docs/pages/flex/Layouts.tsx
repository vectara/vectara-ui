import { BiError, BiTestTube } from "react-icons/bi";
import {
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiLabel,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTextInput,
  VuiTitle
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Layouts = () => (
  <>
    <Subsection title="Header layout">
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        <VuiFlexItem grow={1}>
          <VuiTitle size="m">
            <h4>Identifying info on left</h4>
          </VuiTitle>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
            <VuiFlexItem grow={false}>
              <VuiButtonTertiary color="primary">Secondary action</VuiButtonTertiary>
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiButtonSecondary color="primary">Primary action</VuiButtonSecondary>
            </VuiFlexItem>
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>
    </Subsection>

    <Subsection title="Searchbar layout">
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        <VuiFlexItem grow={false} truncate>
          <VuiLabel>Find stuff in your data</VuiLabel>
        </VuiFlexItem>

        <VuiFlexItem grow={1}>
          <VuiTextInput onChange={() => undefined} />
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiButtonSecondary color="primary">Search all of your data</VuiButtonSecondary>
        </VuiFlexItem>
      </VuiFlexContainer>
    </Subsection>

    <Subsection title="Status layout">
      <VuiFlexContainer alignItems="center" spacing="xs">
        <VuiFlexItem grow={false}>
          <VuiIcon color="danger">
            <BiError />
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiText>
            <p>
              <VuiTextColor color="danger">Error</VuiTextColor>
            </p>
          </VuiText>
        </VuiFlexItem>
      </VuiFlexContainer>
    </Subsection>

    <Subsection title="Flag layout">
      <VuiFlexContainer alignItems="start" spacing="xs" className="flexExampleFlag">
        <VuiFlexItem grow={false} shrink={0}>
          <VuiIcon color="accent">
            <BiTestTube />
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiTitle size="s">
            <h4>Experimental features</h4>
          </VuiTitle>

          <VuiSpacer size="s" />

          <VuiText>
            <p>Features flagged as experimental are prone to breaking unexpectedly.</p>
            <p>
              You're required to sign a waiver before using them. Reading about, mulling over, or having an inkling of
              signing this waiver constitutes acceptance of its terms and conditions.
            </p>
          </VuiText>
        </VuiFlexItem>
      </VuiFlexContainer>
    </Subsection>
  </>
);
