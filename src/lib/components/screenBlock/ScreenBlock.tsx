import classNames from "classnames";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "neutral" | "primary" | "danger" | "success";
  // When a drawer is used to open a modal, ensure the modal's screen block is above the drawer.
  type?: "default" | "modal";
};

export const VuiScreenBlock = ({ onClick, children, color = "neutral", type = "default" }: Props) => {
  const classes = classNames("vuiScreenBlock", `vuiScreenBlock--${color}`, `vuiScreenBlock--${type}`);
  return (
    <div className={classes}>
      {children}
      <div className="vuiScreenBlock__mask" onClick={onClick} />
    </div>
  );
};
