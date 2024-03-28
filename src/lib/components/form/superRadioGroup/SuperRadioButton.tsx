import { createId } from "../../../utils/createId";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiSpacer } from "../../spacer/Spacer";
import { VuiText } from "../../typography/Text";
import { RadioButtonConfig } from "./types";

type Props<T> = RadioButtonConfig<T> & {
  groupName: string;
  onChange: (value: string) => void;
};

export const VuiSuperRadioButton = <T extends string>({
  label,
  description,
  value,
  checked,
  onChange,
  groupName,
  ...rest
}: Props<T>) => {
  const id = createId();

  return (
    <label className="vuiSuperRadioButton" htmlFor={id}>
      <VuiFlexContainer spacing="l" alignItems="center">
        <VuiFlexItem grow={false} shrink={1}>
          <input id={id} name={groupName} type="radio" checked={checked} onChange={() => onChange(value)} {...rest} />
        </VuiFlexItem>

        <VuiFlexItem grow={false} shrink={1}>
          <VuiText>
            <p className="vuiSuperRadioButton__text">{label}</p>
          </VuiText>

          {description && (
            <>
              <VuiSpacer size="xxs" />

              <VuiText size="xs">
                <p className="vuiSuperRadioButton__text vuiSuperRadioButton__description">{description}</p>
              </VuiText>
            </>
          )}
        </VuiFlexItem>
      </VuiFlexContainer>
    </label>
  );
};
