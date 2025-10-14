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
import { datePicker } from "./pages/datePicker";
import { drawer } from "./pages/drawer";
import { errorBoundary } from "./pages/errorBoundary";
import { flex } from "./pages/flex";
import { formGroup } from "./pages/formGroup";
import { grid } from "./pages/grid";
import { horizontalRule } from "./pages/horizontalRule";
import { icon } from "./pages/icon";
import { infoList } from "./pages/infoList";
import { infoMenu } from "./pages/infoMenu";
import { infoTable } from "./pages/infoTable";
import { inProgress } from "./pages/inProgress";
import { input } from "./pages/input";
import { itemsInput } from "./pages/itemsInput";
import { label } from "./pages/label";
import { link } from "./pages/link";
import { list } from "./pages/list";
import { menu } from "./pages/menu";
import { modal } from "./pages/modal";
import { notifications } from "./pages/notifications";
import { optionsButton } from "./pages/optionsButton";
import { optionsList } from "./pages/optionsList";
import { pagination } from "./pages/pagination";
import { panel } from "./pages/panel";
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
import { steps } from "./pages/steps";
import { summary } from "./pages/summary";
import { skeleton } from "./pages/skeleton";
import { superRadioGroup } from "./pages/superRadioGroup";
import { table } from "./pages/table";
import { tabs } from "./pages/tabs";
import { text } from "./pages/text";
import { textArea } from "./pages/textArea";
import { timeline } from "./pages/timeline";
import { toggle } from "./pages/toggle";
import { tooltip } from "./pages/tooltip";
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
    pages: [table, infoTable, infoList, statList, list, pagination]
  },
  {
    name: "Layout",
    pages: [tabs, timeline, accordion, steps, popover, infoMenu, flex, grid, spacer, card, panel, horizontalRule]
  },
  {
    name: "Content",
    pages: [badge, status, callout, code, icon, inProgress, spinner, skeleton, progressBar, text, tooltip]
  },
  {
    name: "Form",
    pages: [
      validation,
      formGroup,
      setting,
      input,
      datePicker,
      label,
      select,
      toggle,
      textArea,
      checkbox,
      radioButton,
      superRadioGroup,
      itemsInput
    ]
  },
  {
    name: "Controls",
    pages: [button, copyButton, link, topicButton, menu, optionsButton, optionsList, searchSelect]
  },
  {
    name: "Utils",
    pages: [errorBoundary, truncate]
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
