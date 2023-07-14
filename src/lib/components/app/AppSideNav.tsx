import classNames from "classnames";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { BiChevronRight } from "react-icons/bi";

export type TreeItem = {
  name: string;
  path?: string;
  pages?: Array<TreeItem>;
};

export type Props = {
  items?: Array<TreeItem>;
  content?: React.ReactNode;
};

const buildItems = (items: Array<TreeItem>, currentPath: string) => {
  return items.map(({ name, pages, path }) => {
    if (pages) {
      return (
        <div className="appSideNavSection" key={name}>
          <div className="appSideNavSection__title">{name}</div>
          <div className="appSideNavSection__items">{buildItems(pages, currentPath)}</div>
        </div>
      );
    }

    if (path) {
      const classes = classNames("appSideNavLink", {
        "appSideNavLink--active": currentPath === path
      });

      return (
        <Link className={classes} to={path} key={path}>
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
      {isCollapsed ? (
        <VuiIconButton
          onClick={() => setIsCollapsed(false)}
          className="appSideNavExpandButton"
          color="normal"
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
  );
};
