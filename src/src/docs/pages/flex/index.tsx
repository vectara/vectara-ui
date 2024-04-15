import "./flexExample.scss";

import { Layouts } from "./Layouts";
import { Wrap } from "./Wrap";
import { Spacing } from "./Spacing";
import { Column } from "./Column";

const LayoutsSource = require("!!raw-loader!./Layouts");
const WrapSource = require("!!raw-loader!./Wrap");
const SpacingSource = require("!!raw-loader!./Spacing");
const ColumnSource = require("!!raw-loader!./Column");

export const flex = {
  name: "Flex",
  path: "/flex",
  examples: [
    {
      name: "Layouts",
      component: <Layouts />,
      source: LayoutsSource.default.toString()
    },
    {
      name: "Wrapping",
      component: <Wrap />,
      source: WrapSource.default.toString()
    },
    {
      name: "Spacing",
      component: <Spacing />,
      source: SpacingSource.default.toString()
    },
    {
      name: "Column direction",
      component: <Column />,
      source: ColumnSource.default.toString()
    }
  ]
};
