type TreeItem = {
  type: "section" | "link";
  title: string;
  path?: string;
  items?: Array<TreeItem>;
};

type Props = {
  items: Array<TreeItem>;
};

const buildItems = (items: Array<TreeItem>) => {
  return items.map((item) => {
    if (item.type === "section") {
      return (
        <div className="section">
          <div className="sectionTitle">{item.title}</div>
          {item.items && <div className="sectionItems">{buildItems(item.items)}</div>}
        </div>
      );
    }

    if (item.type === "link") {
      return (
        <div className="link">
          <div className="linkTitle">{item.title}</div>
        </div>
      );
    }
  });
};

export const VuiAppSideNav = ({ items }: Props) => {
  return <div className="appSideNav">{buildItems(items)}</div>;
};
