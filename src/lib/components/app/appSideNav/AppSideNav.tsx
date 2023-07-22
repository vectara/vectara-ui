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

  const classes = classNames("vuiAppSideNav", {
    "vuiAppSideNav-isCollapsed": isCollapsed
  });

  const contentClasses = classNames("vuiAppSideNavContent", {
    "vuiAppSideNavContent-isHidden": isCollapsed
  });

  const navItems = buildSideNavItems(items);

  return (
    <div className={classes}>
      <div className="vuiAppSideNav__inner">
        {isCollapsed ? (
          <VuiIconButton
            onClick={() => setIsCollapsed(false)}
            className="vuiAppSideNavExpandButton"
            color="neutral"
            icon={
              <VuiIcon>
                <BiChevronRight />
              </VuiIcon>
            }
          />
        ) : (
          <>
            <button className="vuiAppSideNavCollapseButton" onClick={() => setIsCollapsed(true)}>
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
