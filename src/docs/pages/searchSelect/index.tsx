import { SearchSelect } from "./SearchSelect";
import { Async } from "./Async";

const SearchSelectSource = require("!!raw-loader!./SearchSelect");
const AsyncSource = require("!!raw-loader!./Async");

export const searchSelect = {
  name: "Search Select",
  path: "/searchSelect",
  examples: [
    {
      component: <SearchSelect />,
      source: SearchSelectSource.default.toString()
    },
    {
      component: <Async />,
      source: AsyncSource.default.toString()
    }
  ]
};
