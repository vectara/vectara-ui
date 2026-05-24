import { VuiLabel } from "../form/label/Label";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { FormGroupProps } from "./types";
import { VuiInfoTooltip } from "../tooltip/InfoTooltip";
import { BiError } from "react-icons/bi";
import classNames from "classnames";
import { VuiTextColor } from "../typography/TextColor";

export const VuiInlineFormGroup = ({
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
  const hasErrors = errorMessages && errorMessages.length > 0;

  const classes = classNames("vuiInlineFormGroup", {
    "vuiInlineFormGroup-hasError": hasErrors
  });

  return (
    <VuiFlexContainer className={classes} spacing="none" alignItems="stretch">
      {(label || labelRightContent) && (
        <VuiFlexContainer
          justifyContent="spaceBetween"
          className="vuiInlineFormGroup__label"
          alignItems="center"
          spacing="xs"
        >
          {label ? (
            <VuiLabel labelFor={labelFor} size={labelSize}>
              <VuiTextColor color="subdued">
                {label}
                {isRequired && " (required)"}
              </VuiTextColor>
            </VuiLabel>
          ) : (
            <span />
          )}

          {labelRightContent}

          {helpText && <VuiInfoTooltip tip={helpText} id={ariaDescribedByLabel} />}

          {hasErrors && <VuiInfoTooltip color="danger" icon={<BiError />} tip={errorMessages} />}
        </VuiFlexContainer>
      )}

      {content}
    </VuiFlexContainer>
  );
};
