import classNames from "classnames";
import { TabSize } from "./types";

type Style = "enclosed" | "open";

type Props = {
  children: React.ReactNode;
  append?: React.ReactNode;
  className?: string;
  size?: TabSize;
  fullWidth?: boolean;
  style?: Style;
};

export const VuiTabs = ({ children, className, append, size = "s", fullWidth, style = "open" }: Props) => {
  const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`, `vuiTabs--${style}`, {
    "vuiTabs--fullWidth": fullWidth
  });
  return (
    <div className={classes}>
      <div className="vuiTabs__tabs">{children}</div>
      {append && <div className="vuiTabs__appendedContent">{append}</div>}
    </div>
  );
};
