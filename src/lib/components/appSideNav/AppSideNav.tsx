export type TreeItem = {
  type: "section" | "link";
  title: string;
  path?: string;
  items?: Array<TreeItem>;
};

export type Props = {
  items: Array<TreeItem>;
};

const buildItems = (items: Array<TreeItem>) => {
  return items.map((item) => {
    if (item.type === "section") {
      return (
        <div className="appSideNavSection">
          <div className="appSideNavSection__title">{item.title}</div>
          {item.items && <div className="appSideNavSection__items">{buildItems(item.items)}</div>}
        </div>
      );
    }

    if (item.type === "link") {
      return <a className="appSideNavLink">{item.title}</a>;
    }
  });
};

export const VuiAppSideNav = ({ items }: Props) => {
  return <div className="appSideNav">{buildItems(items)}</div>;
};
