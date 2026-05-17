import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
};

export const VuiSideList = ({ className, children, ...rest }: Props) => {
  const classes = classNames("vuiSideList", className);
  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
