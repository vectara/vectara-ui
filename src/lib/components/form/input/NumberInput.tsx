import { forwardRef, useEffect, useRef, useState } from "react";
import { BasicInputProps, VuiBasicInput } from "./BasicInput";

type Props = Omit<BasicInputProps, "onChange"> & {
  value?: number;
  onChange: (value?: number) => void;
  max?: number;
  min?: number;
  step?: number;
  // When true, an empty input emits undefined instead of 0 so consumers
  // can distinguish "no value" from "zero."
  allowUndefined?: boolean;
};

export const VuiNumberInput = forwardRef<HTMLInputElement | null, Props>(
  ({ value, onChange, max, min, step, allowUndefined, ...rest }: Props, ref) => {
    // localValue (rather than binding to `value` directly) sidesteps a
    // Firefox quirk: `<input type="number">` reports "" mid-decimal when the
    // the user types "1,0", which would round-trip through the parent and
    // erase the user's input.
    const [localValue, setLocalValue] = useState<number | undefined>(value);

    // Last value exchanged with the parent. The resync effect ignores echoes
    // of our own emits — without it, a stale prop ("6" arriving after the
    // user has already typed "65") would clobber the in-flight edit.
    const lastSyncedRef = useRef<number | undefined>(value);

    useEffect(() => {
      if (value !== lastSyncedRef.current) {
        lastSyncedRef.current = value;
        setLocalValue(value);
      }
    }, [value]);

    const emit = (next: number | undefined) => {
      const outgoing = allowUndefined ? next : next ?? 0;
      lastSyncedRef.current = outgoing;
      onChange(outgoing);
    };

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        setLocalValue(undefined);
        emit(undefined);
        return;
      }

      const numberValue = Number(e.target.value);
      if (isNaN(numberValue)) {
        setLocalValue(undefined);
        emit(undefined);
        return;
      }

      setLocalValue(numberValue);
      emit(numberValue);
    };

    const onBlur = () => {
      // Clamp against the effective emitted value so empty + !allowUndefined
      // (which emits 0) still clamps to min.
      const current = allowUndefined ? localValue : localValue ?? 0;
      if (current === undefined) return;
      if (min !== undefined && current < min) {
        // Clamp min.
        setLocalValue(min);
        emit(min);
      } else if (max !== undefined && current > max) {
        // Clamp max.
        setLocalValue(max);
        emit(max);
      }
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
