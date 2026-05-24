import { VuiLabel } from "../form/label/Label";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { FormGroupProps } from "./types";

export const VuiBlockFormGroup = ({
  label,
  labelRightContent,
  labelFor,
  labelSize,
  isRequired,
  helpText,
  ariaDescribedByLabel,
  errorMessages,
  content
}: FormGroupProps) => {
  return (
    <div>
      {(label || labelRightContent) && (
        <>
          <VuiFlexContainer justifyContent="spaceBetween" alignItems="center" spacing="s">
            {label ? (
              <VuiLabel labelFor={labelFor} size={labelSize}>
                {label}
                {isRequired && " (required)"}
              </VuiLabel>
            ) : (
              <span />
            )}

            {labelRightContent}
          </VuiFlexContainer>

          <VuiSpacer size={labelSize === "s" ? "xs" : "xxs"} />
        </>
      )}

      {helpText && (
        <>
          <VuiText size="xs" id={ariaDescribedByLabel}>
            <p>
              <VuiTextColor color="subdued">{helpText}</VuiTextColor>
            </p>
          </VuiText>

          <VuiSpacer size="xs" />
        </>
      )}

      {errorMessages && (
        <>
          {errorMessages}
          <VuiSpacer size="xs" />
        </>
      )}

      {content}
    </div>
  );
};
