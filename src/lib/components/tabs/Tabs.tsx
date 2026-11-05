import classNames from "classnames";
import { Children, HTMLAttributes, ReactElement, ReactNode, Ref, isValidElement, useRef } from "react";
import { TabSize } from "./types";
import { TabProps, VuiTab } from "./Tab";
import { TabNavigatorRoute, VuiTabsNavigator } from "./TabsNavigator";
import { useCollapseOnOverflow } from "./useCollapseOnOverflow";

type TabStyle = "enclosed" | "open";

type Props = {
  children: React.ReactNode;
  append?: React.ReactNode;
  className?: string;
  size?: TabSize;
  fullWidth?: boolean;
  tabStyle?: TabStyle;
  vertical?: boolean;
  // "auto" swaps in VuiTabsNavigator when the tabs are close to exceeding the available space.
  collapse?: "auto" | "never";
  tabListProps?: Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">;
  tabListRef?: Ref<HTMLDivElement>;
};

// Finds tabs nested in fragments and wrappers, e.g. a tooltip around a tab.
const findTabs = (node: ReactNode): ReactElement<TabProps>[] =>
  Children.toArray(node).flatMap((child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return [];
    return child.type === VuiTab ? [child as ReactElement<TabProps>] : findTabs(child.props.children);
  });

// Returns null if any child hides its tab from us, because the navigator would silently omit it.
const getNavigatorRoutes = (children: ReactNode): TabNavigatorRoute[] | null => {
  const tabGroups = Children.toArray(children).filter(isValidElement).map(findTabs);
  if (!tabGroups.length || tabGroups.some((tabs) => !tabs.length)) return null;

  return tabGroups.flat().map(({ props }) => {
    const testId = (props as { "data-testid"?: string })["data-testid"];
    return {
      href: props.href,
      onClick: props.onClick,
      title: props.children,
      isActive: Boolean(props.isActive),
      testId: testId && `${testId}-navigator`
    };
  });
};

export const VuiTabs = ({
  children,
  className,
  append,
  size = "s",
  fullWidth,
  tabStyle = "open",
  vertical,
  collapse = "auto",
  tabListProps,
  tabListRef
}: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigatorRoutes = getNavigatorRoutes(children);
  const isCollapsed = useCollapseOnOverflow(
    rootRef,
    collapse === "auto" && !vertical && navigatorRoutes !== null,
    `${navigatorRoutes?.length}-${size}-${tabStyle}`
  );

  const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`, `vuiTabs--${tabStyle}`, {
    "vuiTabs--fullWidth": fullWidth,
    "vuiTabs--vertical": vertical,
    "vuiTabs--collapsed": isCollapsed
  });
  return (
    <div className={classes} ref={rootRef}>
      <div {...tabListProps} ref={tabListRef} className="vuiTabs__tabs">
        {children}
      </div>
      {isCollapsed && navigatorRoutes && (
        <div className="vuiTabs__navigator">
          <VuiTabsNavigator routes={navigatorRoutes} popover={{ anchorSide: "left" }} />
        </div>
      )}
      {append && <div className="vuiTabs__appendedContent">{append}</div>}
    </div>
  );
};
