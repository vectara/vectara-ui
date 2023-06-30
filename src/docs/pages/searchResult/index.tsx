import { SearchResults } from "./SearchResults";
import { Minimal } from "./Minimal";

const SearchResultsSource = require("!!raw-loader!./SearchResults");
const MinimalSource = require("!!raw-loader!./Minimal");

export const searchResult = {
  name: "Search Result",
  path: "/searchResult",
  examples: [
    {
      name: "Multiple results",
      component: <SearchResults />,
      source: SearchResultsSource.default.toString()
    },
    {
      name: "Minimal search result",
      component: <Minimal />,
      source: MinimalSource.default.toString()
    }
  ]
};
