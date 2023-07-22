import { VuiAppSideNavLink } from "./AppSideNavLink";

export type Sections = Array<{
  name: string;
  pages: Array<SectionItem>;
}>;

export type SectionItem = {
  name: string;
  path: string;
};

export const buildSections = (sections: Sections) => {
  return sections.map(({ name, pages }) => {
    const renderedPages = pages.map(({ name, path }) => <VuiAppSideNavLink key={name} path={path} name={name} />);

    return (
      <VuiAppSideNavSection key={name} name={name}>
        {renderedPages}
      </VuiAppSideNavSection>
    );
  });
};

type Props = {
  name: string;
  children: React.ReactNode;
};

const VuiAppSideNavSection = ({ name, children }: Props) => {
  return (
    <div className="vuiAppSideNavSection" key={name}>
      <div className="vuiAppSideNavSection__title">{name}</div>
      <div className="vuiAppSideNavSection__items">{children}</div>
    </div>
  );
};
