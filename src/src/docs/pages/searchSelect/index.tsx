import { SearchSelect } from "./SearchSelect";
const SearchSelectSource = require("!!raw-loader!./SearchSelect");

export const searchSelect = {
  name: "Search Select",
  path: "/searchSelect",
  examples: [
    {
      component: <SearchSelect />,
      source: SearchSelectSource.default.toString()
    }
  ]
};
