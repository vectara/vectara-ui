// Components
import { accountMenu } from "./pages/accountMenu";
import { app } from "./pages/app";
import { badge } from "./pages/badge";
import { button } from "./pages/button";
import { callout } from "./pages/callout";
import { checkbox } from "./pages/checkbox";
import { code } from "./pages/code";
import { copyButton } from "./pages/copyButton";
import { drawer } from "./pages/drawer";
import { flex } from "./pages/flex";
import { formGroup } from "./pages/formGroup";
import { horizontalRule } from "./pages/horizontalRule";
import { icon } from "./pages/icon";
import { infoTable } from "./pages/infoTable";
import { input } from "./pages/input";
import { label } from "./pages/label";
import { link } from "./pages/link";
import { menu } from "./pages/menu";
import { modal } from "./pages/modal";
import { optionsButton } from "./pages/optionsButton";
import { optionsList } from "./pages/optionsList";
import { popover } from "./pages/popover";
import { prompt } from "./pages/prompt";
import { searchInput } from "./pages/searchInput";
import { searchResult } from "./pages/searchResult";
import { searchSelect } from "./pages/searchSelect";
import { select } from "./pages/select";
import { setting } from "./pages/setting";
import { spacer } from "./pages/spacer";
import { spinner } from "./pages/spinner";
import { summary } from "./pages/summary";
import { table } from "./pages/table";
import { tabs } from "./pages/tabs";
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
    pages: [accountMenu, button, copyButton, link, menu, optionsButton, optionsList, searchSelect]
  },
  {
    name: "Form",
    pages: [checkbox, formGroup, input, label, select, setting, toggle]
  },
  {
    name: "Layout",
    pages: [app, flex, horizontalRule, infoTable, spacer, table, tabs]
  },
  {
    name: "Search",
    pages: [prompt, searchInput, searchResult, summary]
  },
  {
    name: "Info",
    pages: [badge, callout, code, icon, spinner, text]
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

type Paths = {
  list: Page[];
  map: Record<string, Page>;
};

export const paths: Paths = categories.reduce(
  (acc, curr) => {
    // Create a list of all pages in order.
    const list = acc.list.concat(curr.pages);

    const mappedPaths = curr.pages.reduce(
      (obj, { path, name, examples }) => ({ ...obj, [path]: { name, examples } }),
      {}
    );

    // Create a map of all pages by path.
    const map = { ...acc.map, ...mappedPaths };

    return { list, map };
  },
  {
    list: [],
    map: {}
  } as Paths
);
