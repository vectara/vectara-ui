import { useState } from "react";
import classNames from "classnames";
import { BiChevronRight } from "react-icons/bi";
import { VuiIconButton } from "../../button/IconButton";
import { VuiIcon } from "../../icon/Icon";
import { buildSideNavItems, Sections, Tree } from "./utils";

export type Props = {
  items?: Sections | Tree;
  content?: React.ReactNode;
};

export const VuiAppSideNav = ({ items = [], content }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const classes = classNames("appSideNav", {
    "appSideNav-isCollapsed": isCollapsed
  });

  const contentClasses = classNames("appSideNavContent", {
    "appSideNavContent-isHidden": isCollapsed
  });

  const navItems = buildSideNavItems(items);

  return (
    <div className={classes}>
      <div className="appSideNav__inner">
        {isCollapsed ? (
          <VuiIconButton
            onClick={() => setIsCollapsed(false)}
            className="appSideNavExpandButton"
            color="neutral"
            icon={
              <VuiIcon>
                <BiChevronRight />
              </VuiIcon>
            }
          />
        ) : (
          <>
            <button className="appSideNavCollapseButton" onClick={() => setIsCollapsed(true)}>
              Collapse nav
            </button>
          </>
        )}

        <div className={contentClasses}>
          {navItems}
          {content}
        </div>
      </div>
    </div>
  );
};
