import classNames from "classnames";

type Props = {
  className?: string;
  labelFor?: string;
  children: React.ReactNode;
  size?: "xs" | "s";
};

export const VuiLabel = ({ className, labelFor, children, size = "s", ...rest }: Props) => {
  const classes = classNames("vuiLabel", `vuiLabel--${size}`, className);

  return (
    <label className={classes} htmlFor={labelFor} {...rest}>
      {children}
    </label>
  );
};
