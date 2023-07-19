import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { BiChevronRight } from "react-icons/bi";

export type TreeItem = {
  name?: string;
  path?: string;
  pages?: Array<TreeItem>;
};

export type Props = {
  items?: Array<TreeItem>;
  content?: React.ReactNode;
};

const buildItems = (items: Array<TreeItem>, currentPath: string, depth = 0) => {
  return items.map(({ name, pages, path }) => {
    if (pages) {
      const classes = classNames("appSideNavSectionItems", {
        "appSideNavSectionItems--nested": depth > 0
      });

      const childPages = <div className={classes}>{buildItems(pages, currentPath, depth + 1)}</div>;

      const titleClasses = classNames("appSideNavSectionTitle", {
        "appSideNavSectionTitle--nested": depth > 0
      });

      return (
        <div className="appSideNavSection" key={name ?? path}>
          {name && <div className={titleClasses}>{name}</div>}
          {childPages}
        </div>
      );
      // }

      // return childPages;
    }

    if (path) {
      const classes = classNames("appSideNavLink", {
        "appSideNavLink--active": currentPath === path
      });

      return (
        <Link className={classes} to={path} key={name}>
          {name}
        </Link>
      );
    }
  });
};

export const VuiAppSideNav = ({ items = [], content }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const classes = classNames("appSideNav", {
    "appSideNav-isCollapsed": isCollapsed
  });

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

            {buildItems(items, location.pathname)}

            {content}
          </>
        )}
      </div>
    </div>
  );
};
