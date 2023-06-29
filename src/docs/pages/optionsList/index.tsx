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
      name: "Options List",
      component: <OptionsList />,
      source: OptionsListSource.default.toString()
    },
    {
      name: "Selectable options List",
      component: <SelectableOptionsList />,
      source: SelectableOptionsListSource.default.toString()
    },
    {
      name: "Scrollable options List",
      component: <ScrollableOptionsList />,
      source: ScrollableOptionsListSource.default.toString()
    }
  ]
};
