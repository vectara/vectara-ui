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
  path: string;
  pages?: Tree;
};
