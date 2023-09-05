import { List } from "./List";
const ListSource = require("!!raw-loader!./List");

export const list = {
  name: "List",
  path: "/list",
  examples: [
    {
      component: <List />,
      source: ListSource.default.toString()
    }
  ]
};
