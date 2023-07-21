import { VuiAppSideNavLink } from "./AppSideNavLink";
import { AppSideNavTreeSection } from "./AppSideNavTreeSection";

export type Sections = Array<{
  name: string;
  pages: Array<SectionItem>;
}>;

export type SectionItem = {
  name: string;
  path: string;
};

export type Tree = Array<TreeItem>;

export type TreeItem = {
  name: string;
  path?: string;
  pages?: Tree;
  iconAfter?: React.ReactNode;
};

export const buildSideNavItems = (items: Sections | Tree) => {
  return isTree(items) ? <div className="appSideNavTree">{buildTree(items)}</div> : buildSections(items);
};

// Type guard to determine if we have a Tree or Sections.
const isTree = (items: Tree | Sections): items is Tree => {
  return (items as Tree).findIndex((item) => item.path) !== -1;
};

const buildSections = (sections: Sections) => {
  return sections.map(({ name, pages }) => {
    const renderedPages = pages.map(({ name, path }) => <VuiAppSideNavLink key={name} path={path} name={name} />);

    return (
      <div className="appSideNavSection" key={name}>
        <div className="appSideNavSection__title">{name}</div>
        <div className="appSideNavSection__items">{renderedPages}</div>
      </div>
    );
  });
};

const buildTree = (items: Tree) => {
  return items.map(({ name, pages, path, iconAfter }) => {
    if (path) {
      if (pages) {
        const childPages = buildTree(pages);

        return (
          <AppSideNavTreeSection path={path} name={name}>
            {childPages}
          </AppSideNavTreeSection>
        );
      }

      return <VuiAppSideNavLink path={path} name={name} iconAfter={iconAfter} />;
    }

    return <div className="appSideNavTreeSection__info">{name}</div>;
  });
};
