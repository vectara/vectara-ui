import { forwardRef, useEffect, useState } from "react";
import { BasicInputProps, VuiBasicInput } from "./BasicInput";

type Props = Omit<BasicInputProps, "onChange"> & {
  value?: number;
  onChange: (value?: number) => void;
  max?: number;
  min?: number;
  step?: number;
};

export const VuiNumberInput = forwardRef<HTMLInputElement | null, Props>(
  ({ value, onChange, max, min, step, ...rest }: Props, ref) => {
    const [localValue, setLocalValue] = useState<number | undefined>(value);

    // This is a hacky solution to the number input misbehaving on Firefox.
    // If we were to apply the value and onChange values directly to the
    // value and onChange props of the input, then a user who:
    //  1. Selects all
    //  2. Types 1.0
    // will have the input show "0" as soon as they enter a decimal point.
    // When that character is entered, onChange is called with undefined.
    // This value gets stored in the value state, which resets the value to 0.
    // For some reason, using a useState hook to store the value doesn't have
    // this problem.
    useEffect(() => {
      // Reflect the upstream value when it changes. Ignore 0
      // because that indicates the user has entered a decimal point.
      if (value !== 0) {
        setLocalValue(value);
      }
    }, [value]);

    // Part of the hacky solution above.
    useEffect(() => {
      // Set value locally so an undefined value doesn't reset it to 0.
      // Pass the value upstream, e.g. so it can be persisted.
      onChange(localValue ?? 0);
    }, [localValue]);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Enable resetting the value to undefined.
      if (e.target.value === "") return setLocalValue(undefined);

      const numberValue = Number(e.target.value);
      if (isNaN(numberValue)) return setLocalValue(undefined);

      setLocalValue(Number(e.target.value));
    };

    const onBlur = () => {
      if (min !== undefined && value !== undefined && value < min) onChange(min);
      if (max !== undefined && value !== undefined && value > max) onChange(max);
    };

    const props = {
      type: "number",
      value: localValue ?? "",
      onChange: onChangeValue,
      onBlur,
      max,
      min,
      step,
      ...rest
    };

    return <VuiBasicInput {...props} ref={ref} />;
  }
);
