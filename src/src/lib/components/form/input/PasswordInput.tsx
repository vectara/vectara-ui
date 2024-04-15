import classNames from "classnames";
import { forwardRef } from "react";
import { BasicInputProps, VuiBasicInput } from "./BasicInput";

type Props = BasicInputProps & {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  isPasswordVisible?: boolean;
};

export const VuiPasswordInput = forwardRef<HTMLInputElement | null, Props>(
  ({ className, isPasswordVisible, ...rest }: Props, ref) => {
    const classes = classNames("vuiInput--text", className);
    const props = { type: isPasswordVisible ? "text" : "password", ...rest };

    return <VuiBasicInput className={classes} ref={ref} {...props} />;
  }
);
