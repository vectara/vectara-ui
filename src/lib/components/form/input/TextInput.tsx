import classNames from "classnames";
import { forwardRef } from "react";
import { BasicInputProps, VuiBasicInput } from "./BasicInput";

export type Props = BasicInputProps & {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

export const VuiTextInput = forwardRef<HTMLInputElement | null, Props>(({ className, ...rest }: Props, ref) => {
  const classes = classNames("vuiInput--text", className);
  const props = { type: "text", ...rest };

  return <VuiBasicInput className={classes} ref={ref} {...props} />;
});
