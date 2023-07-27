import { Empty } from "./Empty";
import { Table } from "./Table";
import { Pager } from "./Pager";

const EmptySource = require("!!raw-loader!./Empty");
const TableSource = require("!!raw-loader!./Table");
const PagerSource = require("!!raw-loader!./Pager");

export const table = {
  name: "Table",
  path: "/table",
  examples: [
    {
      name: "Empty state",
      component: <Empty />,
      source: EmptySource.default.toString()
    },
    {
      name: "With complex pagination",
      component: <Table />,
      source: TableSource.default.toString()
    },
    {
      name: "With simple pager",
      component: <Pager />,
      source: PagerSource.default.toString()
    }
  ]
};
