import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  size?: "s" | "m";
  isActive?: boolean;
  onClick: () => void;
  append?: React.ReactNode;
  "data-testid"?: string;
};

export const VuiChip = ({ children, size = "m", isActive, append, ...rest }: Props) => {
  const classes = classNames("vuiChip", `vuiChip--${size}`, {
    "vuiChip-isActive": isActive
  });

  return (
    <button className={classes} {...rest}>
      <div className="vuiChip__label">{children}</div>

      {append && <div className="vuiChip__append">{append}</div>}
    </button>
  );
};
