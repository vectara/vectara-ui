import classNames from "classnames";
import { useLocation } from "react-router-dom";

export type TreeItem = {
  name: string;
  path?: string;
  pages?: Array<TreeItem>;
};

export type Props = {
  items: Array<TreeItem>;
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
        <a className={classes} href={path} key={path}>
          {name}
        </a>
      );
    }
  });
};

export const VuiAppSideNav = ({ items }: Props) => {
  const location = useLocation();
  return <div className="appSideNav">{buildItems(items, location.pathname)}</div>;
};
