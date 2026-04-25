import classNames from "classnames";
import { TabSize } from "./types";

type TabStyle = "enclosed" | "open";

type Props = {
  children: React.ReactNode;
  append?: React.ReactNode;
  className?: string;
  size?: TabSize;
  fullWidth?: boolean;
  tabStyle?: TabStyle;
  vertical?: boolean;
};

export const VuiTabs = ({ children, className, append, size = "s", fullWidth, tabStyle = "open", vertical }: Props) => {
  const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`, `vuiTabs--${tabStyle}`, {
    "vuiTabs--fullWidth": fullWidth,
    "vuiTabs--vertical": vertical
  });
  return (
    <div className={classes}>
      <div className="vuiTabs__tabs">{children}</div>
      {append && <div className="vuiTabs__appendedContent">{append}</div>}
    </div>
  );
};
