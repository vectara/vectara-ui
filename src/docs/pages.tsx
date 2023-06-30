// Components
import { badge } from "./pages/badge";
import { button } from "./pages/button";
import { drawer } from "./pages/drawer";
import { flex } from "./pages/flex";
import { icon } from "./pages/icon";
import { menu } from "./pages/menu";
import { modal } from "./pages/modal";
import { optionsList } from "./pages/optionsList";
import { popover } from "./pages/popover";
import { searchInput } from "./pages/searchInput";
import { searchResult } from "./pages/searchResult";
import { setting } from "./pages/setting";
import { spacer } from "./pages/spacer";
import { summary } from "./pages/summary";
import { text } from "./pages/text";
import { toggle } from "./pages/toggle";

// Utils
import { truncate } from "./pages/truncate";

type Category = { name: string; pages: Page[] };
type Page = { name: string; path: string; examples: Example[] };
export type Example = { name?: string; component: React.ReactNode; source: string };

export const categories: Category[] = [
  {
    name: "Controls",
    pages: [button, menu, optionsList, setting, toggle]
  },
  {
    name: "Layout",
    pages: [flex, spacer]
  },
  {
    name: "Search",
    pages: [searchInput, searchResult, summary]
  },
  {
    name: "Info",
    pages: [badge, icon, text]
  },
  {
    name: "Containers",
    pages: [drawer, modal, popover]
  },
  {
    name: "Utils",
    pages: [truncate]
  }
];

export const pathToPageMap: Record<string, Page> = categories.reduce((acc, curr) => {
  const mappedPaths = curr.pages.reduce(
    (obj, { path, name, examples }) => ({ ...obj, [path]: { name, examples } }),
    {}
  );
  return { ...acc, ...mappedPaths };
}, {});
