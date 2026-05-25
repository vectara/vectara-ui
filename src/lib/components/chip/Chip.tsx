import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  append?: React.ReactNode;
  "data-testid"?: string;
};

export const VuiChip = ({ children, isActive, append, ...rest }: Props) => {
  const classes = classNames("vuiChip", {
    "vuiChip-isActive": isActive
  });

  return (
    <button className={classes} {...rest}>
      <div className="vuiChip__label">{children}</div>

      {append && <div className="vuiChip__append">{append}</div>}
    </button>
  );
};
