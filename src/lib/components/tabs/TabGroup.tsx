import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

// Visually separates a set of tabs within VuiTabs. Selection still spans all groups.
export const VuiTabGroup = ({ children, className }: Props) => (
  <div className={classNames(className, "vuiTabGroup")}>{children}</div>
);
