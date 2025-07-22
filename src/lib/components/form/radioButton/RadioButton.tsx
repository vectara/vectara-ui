import { createId } from "../../../utils/createId";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  groupName: string;
};

export const VuiRadioButton = ({ label, ...rest }: Props) => {
  const id = createId();

  const radioButton = <input id={id} type="radio" {...rest} />;

  if (!label) {
    return radioButton;
  }

  return (
    <VuiFlexContainer spacing="xs" alignItems="center">
      <VuiFlexItem grow={false} shrink={false}>
        {radioButton}
      </VuiFlexItem>

      <VuiFlexItem grow={false} shrink={false}>
        <label className="vuiRadioButtonLabel" htmlFor={id}>
          {label}
        </label>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
