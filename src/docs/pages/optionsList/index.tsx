import { OptionsList } from "./OptionsList";
import { SelectableOptionsList } from "./SelectableOptionsList";
import { ScrollableOptionsList } from "./ScrollableOptionsList";

const OptionsListSource = require("!!raw-loader!./OptionsList");
const SelectableOptionsListSource = require("!!raw-loader!./SelectableOptionsList");
const ScrollableOptionsListSource = require("!!raw-loader!./ScrollableOptionsList");

export const optionsList = {
  name: "Options List",
  path: "/options-list",
  examples: [
    {
      name: "Basic",
      component: <OptionsList />,
      source: OptionsListSource.default.toString()
    },
    {
      name: "Multi-select",
      component: <SelectableOptionsList />,
      source: SelectableOptionsListSource.default.toString()
    },
    {
      name: "Scrollable single-select",
      component: <ScrollableOptionsList />,
      source: ScrollableOptionsListSource.default.toString()
    }
  ]
};
