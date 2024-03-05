import classNames from "classnames";
import { TabSize } from "./types";

type Props = {
  children: React.ReactNode;
  append?: React.ReactNode;
  className?: string;
  size?: TabSize;
  fullWidth?: boolean;
};

export const VuiTabs = ({ children, className, append, size = "s", fullWidth }: Props) => {
  const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`, {
    "vuiTabs--fullWidth": fullWidth
  });
  return (
    <div className={classes}>
      <div className="vuiTabs__tabs">{children}</div>
      {append && <div className="vuiTabs__appendedContent">{append}</div>}
    </div>
  );
};
