import { cloneElement } from "react";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { createId } from "../../utils/createId";
import { VuiTextInput } from "../form/input/TextInput";
import { VuiNumberInput } from "../form/input/NumberInput";
import { VuiTextArea } from "../form/textArea/TextArea";
import { VuiSelect } from "../form/select/Select";
import { VuiInlineFormGroup } from "./InlineFormGroup";
import { VuiBlockFormGroup } from "./BlockFormGroup";

const VALIDATION_ALLOWLIST = [VuiTextInput, VuiNumberInput, VuiTextArea, VuiSelect] as const;

type Props = {
  labelFor?: string;
  label?: string;
  labelSize?: "s" | "xs";
  labelRightContent?: React.ReactNode;
  children: React.ReactElement;
  helpText?: React.ReactNode;
  errors?: string[];
  isRequired?: boolean;
  inline?: boolean;
};

export const VuiFormGroup = ({
  children,
  labelFor,
  helpText,
  label,
  labelSize = "s",
  labelRightContent,
  errors,
  isRequired,
  inline
}: Props) => {
  const ariaProps: Record<string, string> = {
    "aria-describedby": ""
  };

  const ariaDescribedByLabel = `help-${createId()}`;

  const errorMessageIds: string[] = [];

  const errorMessages = errors?.map((error, index) => {
    const id = `error-${createId()}`;
    errorMessageIds.push(id);

    return (
      <div key={error}>
        {index > 0 && <VuiSpacer size="xs" />}

        <VuiText size="xs" key={error} id={id}>
          <p>
            <VuiTextColor color={inline ? "empty" : "danger"}>{error}</VuiTextColor>
          </p>
        </VuiText>
      </div>
    );
  });

  if (helpText) {
    ariaProps["aria-describedby"] += ariaDescribedByLabel;
  }

  if (errorMessages?.length) {
    ariaProps["aria-describedby"] += " " + errorMessageIds.join(" ");
  }

  const cloneProps: {
    id?: string;
    required: boolean | undefined;
    isInvalid?: boolean;
  } = {
    ...ariaProps,
    id: labelFor,
    required: isRequired
  };

  const canValidateChild = VALIDATION_ALLOWLIST.includes(children.type as any);

  if (canValidateChild) {
    cloneProps.isInvalid = errors && errors.length > 0;
  }

  const content = cloneElement(children, cloneProps);

  const props = {
    label,
    labelRightContent,
    labelFor,
    labelSize,
    isRequired,
    helpText,
    ariaDescribedByLabel,
    errorMessages,
    content
  };

  if (inline) {
    return <VuiInlineFormGroup {...props} />;
  }

  return <VuiBlockFormGroup {...props} />;
};
