import { cloneElement } from "react";
import { VuiLabel } from "../form/label/Label";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { createId } from "../../utils/createId";

type Props = {
  labelFor: string;
  label: string;
  children: React.ReactElement;
  helpText?: React.ReactNode;
  errors?: string[];
};

export const VuiFormGroup = ({ children, labelFor, helpText, label, errors }: Props) => {
  const ariaProps: Record<string, string> = {};

  const ariaDescribedByLabel = label.replace(/\s/g, "");

  const errorMessageIds: string[] = [];

  const errorMessages = errors?.map((error) => {
    const id = `error-${createId()}`;
    errorMessageIds.push(id);

    return (
      <VuiText size="xs" key={error} id={id}>
        <p>
          <VuiTextColor color="danger">{error}</VuiTextColor>
        </p>
      </VuiText>
    );
  });

  if (helpText) {
    ariaProps["aria-describedby"] = `${ariaDescribedByLabel}-help ${errorMessageIds.join(" ")}`;
  }

  const content = cloneElement(children, {
    ...ariaProps,
    isInvalid: errors && errors.length > 0
  });

  return (
    <>
      <VuiLabel labelFor={labelFor}>{label}</VuiLabel>

      <VuiSpacer size="xs" />

      {content}

      {helpText && (
        <>
          <VuiSpacer size="xs" />

          <VuiText size="xs" id={`${label}-help`}>
            <p>
              <VuiTextColor color="subdued">{helpText}</VuiTextColor>
            </p>
          </VuiText>
        </>
      )}

      {errorMessages}
    </>
  );
};
