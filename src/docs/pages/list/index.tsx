import { List } from "./List";
const ListSource = require("!!raw-loader!./List");

export const list = {
  name: "List",
  path: "/list",
  example: {
    component: <List />,
    source: ListSource.default.toString()
  }
};
