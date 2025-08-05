import { SearchInput } from "./SearchInput";
import { Large } from "./Large";
import { ClearableSearchInput } from "./Clearable";

const SearchInputSource = require("!!raw-loader!./SearchInput");
const LargeSource = require("!!raw-loader!./Large");
const ClearableInputSource = require("!!raw-loader!./Clearable");

export const searchInput = {
  name: "Search Input",
  path: "/searchInput",
  examples: [
    {
      name: "Medium size",
      component: <SearchInput />,
      source: SearchInputSource.default.toString()
    },
    {
      name: "Large size",
      component: <Large />,
      source: LargeSource.default.toString()
    },
    {
      name: "Clearable input",
      component: <ClearableSearchInput />,
      source: ClearableInputSource.default.toString()
    }
  ]
};
