import classNames from "classnames";
import { forwardRef } from "react";

const SIZE = ["m", "l"] as const;

export type BasicInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "autoComplete" | "ref"
> & {
  isInvalid?: boolean;
  size?: (typeof SIZE)[number];
  fullWidth?: boolean;
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        onSubmit?.(e);
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
