// Components
import { accordion } from "./pages/accordion";
import { accountButton } from "./pages/accountButton";
import { app } from "./pages/app";
import { badge } from "./pages/badge";
import { button } from "./pages/button";
import { callout } from "./pages/callout";
import { card } from "./pages/card";
import { chat } from "./pages/chat";
import { checkbox } from "./pages/checkbox";
import { code } from "./pages/code";
import { copyButton } from "./pages/copyButton";
import { drawer } from "./pages/drawer";
import { flex } from "./pages/flex";
import { formGroup } from "./pages/formGroup";
import { grid } from "./pages/grid";
import { horizontalRule } from "./pages/horizontalRule";
import { icon } from "./pages/icon";
import { infoList } from "./pages/infoList";
import { infoMenu } from "./pages/infoMenu";
import { infoTable } from "./pages/infoTable";
import { input } from "./pages/input";
import { label } from "./pages/label";
import { link } from "./pages/link";
import { list } from "./pages/list";
import { menu } from "./pages/menu";
import { modal } from "./pages/modal";
import { notifications } from "./pages/notifications";
import { optionsButton } from "./pages/optionsButton";
import { optionsList } from "./pages/optionsList";
import { popover } from "./pages/popover";
import { progressBar } from "./pages/progressBar";
import { prompt } from "./pages/prompt";
import { radioButton } from "./pages/radioButton";
import { searchInput } from "./pages/searchInput";
import { searchResult } from "./pages/searchResult";
import { searchSelect } from "./pages/searchSelect";
import { select } from "./pages/select";
import { setting } from "./pages/setting";
import { spacer } from "./pages/spacer";
import { spinner } from "./pages/spinner";
import { status } from "./pages/status";
import { statList } from "./pages/statList";
import { summary } from "./pages/summary";
import { superRadioGroup } from "./pages/superRadioGroup";
import { table } from "./pages/table";
import { tabs } from "./pages/tabs";
import { text } from "./pages/text";
import { textArea } from "./pages/textArea";
import { timeline } from "./pages/timeline";
import { toggle } from "./pages/toggle";
import { topicButton } from "./pages/topicButton";
import { validation } from "./pages/validation";

// Utils
import { truncate } from "./pages/truncate";

type Category = { name: string; pages: Page[] };
type Page = { name: string; path: string; examples: Example[] };
export type Example = { name?: string; component: React.ReactNode; source: string };

export const categories: Category[] = [
  {
    name: "Query",
    pages: [chat, prompt, searchInput, searchResult, summary]
  },
  {
    name: "Application",
    pages: [app, drawer, modal, notifications, accountButton]
  },
  {
    name: "Info",
    pages: [table, infoTable, infoList, statList, list]
  },
  {
    name: "Layout",
    pages: [tabs, timeline, accordion, popover, infoMenu, flex, grid, spacer, card, horizontalRule]
  },
  {
    name: "Content",
    pages: [badge, status, callout, code, icon, progressBar, spinner, text]
  },
  {
    name: "Form",
    pages: [
      validation,
      formGroup,
      setting,
      input,
      label,
      select,
      toggle,
      textArea,
      checkbox,
      radioButton,
      superRadioGroup
    ]
  },
  {
    name: "Controls",
    pages: [button, copyButton, link, topicButton, menu, optionsButton, optionsList, searchSelect]
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
