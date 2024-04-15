import { Table } from "./Table";
const TableSource = require("!!raw-loader!./Table");

export const table = {
  name: "Table",
  path: "/table",
  examples: [
    {
      component: <Table />,
      source: TableSource.default.toString()
    }
  ]
};
