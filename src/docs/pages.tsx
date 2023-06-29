// Components
import { button } from "./pages/button";
import { drawer } from "./pages/drawer";
import { icon } from "./pages/icon";
import { menu } from "./pages/menu";
import { modal } from "./pages/modal";
import { optionsList } from "./pages/optionsList";
import { popover } from "./pages/popover";
import { searchInput } from "./pages/searchInput";
import { setting } from "./pages/setting";
import { toggle } from "./pages/toggle";

// Utils
import { truncate } from "./pages/truncate";

type Section = { name: string; pages: Page[] };
type Page = { name: string; path: string; examples: Example[] };
type Example = { name?: string; component: React.ReactNode; source: string };

export const sections: Section[] = [
  {
    name: "Components",
    pages: [button, drawer, icon, menu, modal, optionsList, popover, searchInput, setting, toggle]
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
