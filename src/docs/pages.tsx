import { buttons } from "./pages/buttons";
import { drawers } from "./pages/drawers";
import { modals } from "./pages/modals";
import { optionsList } from "./pages/optionsList";
import { popovers } from "./pages/popovers";
import { truncate } from "./pages/truncate";

type Section = { name: string; pages: Page[] };
type Page = { name: string; path: string; examples: Example[] };
type Example = { name: string; component: React.ReactNode; source: string };

export const sections: Section[] = [
  {
    name: "Components",
    pages: [buttons, drawers, modals, optionsList, popovers]
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
