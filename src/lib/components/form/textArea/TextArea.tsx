import { forwardRef } from "react";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  fullWidth?: boolean;
  isInvalid?: boolean;
  resizable?: boolean;
};

export const VuiTextArea = forwardRef<HTMLTextAreaElement | null, Props>(
  ({ className, fullWidth, isInvalid, resizable, ...rest }: Props, ref) => {
    const classes = classNames(
      "vuiTextArea",
      {
        "vuiTextArea-isInvalid": isInvalid,
        "vuiTextArea--fullWidth": fullWidth
      },
      className
    );

    const style = {
      ...rest.style,
      resize: resizable ? "vertical" : "none"
    } as React.CSSProperties;

    return <textarea {...rest} ref={ref} className={classes} style={style} />;
  }
);
