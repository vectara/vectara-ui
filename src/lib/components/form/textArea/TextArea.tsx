import { forwardRef } from "react";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  fullWidth?: boolean;
  isInvalid?: boolean;
};

export const VuiTextArea = forwardRef<HTMLTextAreaElement | null, Props>(
  ({ className, fullWidth, isInvalid, ...rest }: Props, ref) => {
    const classes = classNames(
      "vuiTextArea",
      {
        "vuiTextArea-isInvalid": isInvalid,
        "vuiTextArea--fullWidth": fullWidth
      },
      className
    );

    return <textarea {...rest} ref={ref} className={classes} />;
  }
);
