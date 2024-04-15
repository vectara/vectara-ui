import classNames from "classnames";
import { forwardRef } from "react";

const SIZE = ["m", "l"] as const;

export type BasicInputProps = {
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  isInvalid?: boolean;
  size?: (typeof SIZE)[number];
  fullWidth?: boolean;
  onSubmit?: () => void;
  autoFocus?: boolean;
  autoComplete?: boolean | string;
};

export const VuiBasicInput = forwardRef<HTMLInputElement | null, BasicInputProps>(
  (
    {
      className,
      id,
      name,
      placeholder,
      size = "m",
      fullWidth,
      onSubmit,
      isInvalid,
      autoFocus,
      autoComplete,
      ...rest
    }: BasicInputProps,
    ref
  ) => {
    const classes = classNames(
      "vuiInput",
      `vuiInput--${size}`,
      {
        "vuiInput-isInvalid": isInvalid,
        "vuiInput--fullWidth": fullWidth
      },
      className
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        onSubmit?.();
      }
    };

    return (
      <input
        type="text"
        autoComplete={autoComplete === true ? "on" : autoComplete === false ? "off" : autoComplete}
        autoFocus={autoFocus}
        ref={ref}
        className={classes}
        id={id}
        name={name}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  }
);
