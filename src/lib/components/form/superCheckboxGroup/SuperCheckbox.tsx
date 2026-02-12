import { createId } from "../../../utils/createId";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiSpacer } from "../../spacer/Spacer";
import { VuiText } from "../../typography/Text";
import { CheckboxConfig } from "./types";

type Props<T> = CheckboxConfig<T> & {
  onChange: (value: string) => void;
};

export const VuiSuperCheckbox = <T extends string>({
  label,
  description,
  value,
  checked,
  onChange,
  ...rest
}: Props<T>) => {
  const id = createId();

  return (
    <label className="vuiSuperCheckbox" htmlFor={id}>
      <VuiFlexContainer spacing="l" alignItems="center">
        <VuiFlexItem grow={false} shrink={0}>
          <input id={id} type="checkbox" checked={checked} onChange={() => onChange(value)} {...rest} />
        </VuiFlexItem>

        <VuiFlexItem grow={false} shrink={1}>
          <VuiText>
            <p className="vuiSuperCheckbox__text">{label}</p>
          </VuiText>

          {description && (
            <>
              <VuiSpacer size="xxs" />

              <VuiText size="xs">
                <p className="vuiSuperCheckbox__text vuiSuperCheckbox__description">{description}</p>
              </VuiText>
            </>
          )}
        </VuiFlexItem>
      </VuiFlexContainer>
    </label>
  );
};
