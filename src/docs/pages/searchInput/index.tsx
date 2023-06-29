import { SearchInput } from "./SearchInput";
import { Large } from "./Large";

const SearchInputSource = require("!!raw-loader!./SearchInput");
const LargeSource = require("!!raw-loader!./Large");

export const searchInput = {
  name: "Search Input",
  path: "/searchInput",
  examples: [
    {
      component: <SearchInput />,
      source: SearchInputSource.default.toString()
    },
    {
      component: <Large />,
      source: LargeSource.default.toString()
    }
  ]
};
