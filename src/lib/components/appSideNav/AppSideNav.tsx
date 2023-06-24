export type TreeItem = {
  name: string;
  path?: string;
  items?: Array<TreeItem>;
};

export type Props = {
  items: Array<TreeItem>;
};

const buildItems = (items: Array<TreeItem>) => {
  return items.map(({ name, items, path }) => {
    if (items) {
      return (
        <div className="appSideNavSection" key={name}>
          <div className="appSideNavSection__title">{name}</div>
          <div className="appSideNavSection__items">{buildItems(items)}</div>
        </div>
      );
    }

    if (path) {
      return (
        <a className="appSideNavLink" href={path} key={path}>
          {name}
        </a>
      );
    }
  });
};

export const VuiAppSideNav = ({ items }: Props) => {
  return <div className="appSideNav">{buildItems(items)}</div>;
};
