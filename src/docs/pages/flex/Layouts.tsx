import { BiError, BiTestTube } from "react-icons/bi";
import {
  VuiButtonSecondary,
  VuiButtonTertiary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Layouts = () => (
  <>
    <Subsection title={"Header layout"}>
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        <VuiFlexItem grow={false}>
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

    <Subsection title={"Status layout"}>
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

    <Subsection title={"Flag layout"}>
      <VuiFlexContainer alignItems="start" spacing="xs" className="flexExampleFlag">
        <VuiFlexItem grow={false}>
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
