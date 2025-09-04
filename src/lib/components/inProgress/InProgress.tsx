import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiText } from "../typography/Text";

type Props = {
  label: string;
};

export const VuiInProgress = ({ label }: Props) => (
  <VuiFlexContainer alignItems="center" spacing="xs">
    <VuiFlexItem grow={false}>
      <VuiSpinner size="xs" />
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiText>
        <p>{label}…</p>
      </VuiText>
    </VuiFlexItem>
  </VuiFlexContainer>
);
