import { button } from "./pages/button";
import { drawer } from "./pages/drawer";
import { modal } from "./pages/modal";
import { optionsList } from "./pages/optionsList";
import { popover } from "./pages/popover";
import { truncate } from "./pages/truncate";

type Section = { name: string; pages: Page[] };
type Page = { name: string; path: string; examples: Example[] };
type Example = { name: string; component: React.ReactNode; source: string };

export const sections: Section[] = [
  {
    name: "Components",
    pages: [button, drawer, modal, optionsList, popover]
  },
  {
    name: "Utils",
    pages: [truncate]
  }
];

export const pathToPageMap: Record<string, Page> = sections.reduce((acc, curr) => {
  const mappedPaths = curr.pages.reduce(
    (obj, { path, name, examples }) => ({ ...obj, [path]: { name, examples } }),
    {}
  );
  return { ...acc, ...mappedPaths };
}, {});
