import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
};

export const VuiMenuList = ({ className, children, ...rest }: Props) => {
  const classes = classNames("vuiMenuList", className);
  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
