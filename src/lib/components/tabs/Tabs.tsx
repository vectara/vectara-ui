import classNames from "classnames";
import { HTMLAttributes, Ref } from "react";
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
  tabListProps?: Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">;
  tabListRef?: Ref<HTMLDivElement>;
};

export const VuiTabs = ({
  children,
  className,
  append,
  size = "s",
  fullWidth,
  tabStyle = "open",
  vertical,
  tabListProps,
  tabListRef
}: Props) => {
  const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`, `vuiTabs--${tabStyle}`, {
    "vuiTabs--fullWidth": fullWidth,
    "vuiTabs--vertical": vertical
  });
  return (
    <div className={classes}>
      <div {...tabListProps} ref={tabListRef} className="vuiTabs__tabs">
        {children}
      </div>
      {append && <div className="vuiTabs__appendedContent">{append}</div>}
    </div>
  );
};
