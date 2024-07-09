import { SearchSelect } from "./SearchSelect";
import { Async } from "./Async";
import { SingleSelect } from "./SingleSelect";

const SearchSelectSource = require("!!raw-loader!./SearchSelect");
const AsyncSource = require("!!raw-loader!./Async");
const SingleSelectSource = require("!!raw-loader!./SingleSelect");

export const searchSelect = {
  name: "Search Select",
  path: "/searchSelect",
  examples: [
    {
      name: "Synchronous search",
      component: <SearchSelect />,
      source: SearchSelectSource.default.toString()
    },
    {
      name: "Asynchronous search",
      component: <Async />,
      source: AsyncSource.default.toString()
    },
    {
      name: "Single selection",
      component: <SingleSelect />,
      source: SingleSelectSource.default.toString()
    }
  ]
};
