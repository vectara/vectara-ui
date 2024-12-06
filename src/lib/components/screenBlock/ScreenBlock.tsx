import classNames from "classnames";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "neutral" | "primary" | "danger" | "success";
};

export const VuiScreenBlock = ({ onClick, children, color = "neutral" }: Props) => {
  const classes = classNames("vuiScreenBlock", `vuiScreenBlock--${color}`);
  return (
    <div className={classes}>
      {children}
      <div className="vuiScreenBlock__mask" onClick={onClick} />
    </div>
  );
};
