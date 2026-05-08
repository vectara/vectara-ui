import { SearchInput } from "./SearchInput";
import { ClearableSearchInput } from "./Clearable";
import { Suggestions } from "./Suggestions";
import { ValueSuggestions } from "./ValueSuggestions";

const SearchInputSource = require("!!raw-loader!./SearchInput");
const ClearableInputSource = require("!!raw-loader!./Clearable");
const SuggestionsSource = require("!!raw-loader!./Suggestions");
const ValueSuggestionsSource = require("!!raw-loader!./ValueSuggestions");

export const searchInput = {
  name: "Search Input",
  path: "/searchInput",
  examples: [
    {
      name: "Sizes",
      component: <SearchInput />,
      source: SearchInputSource.default.toString()
    },
    {
      name: "Clearable input",
      component: <ClearableSearchInput />,
      source: ClearableInputSource.default.toString()
    },
    {
      name: "With suggestions",
      component: <Suggestions />,
      source: SuggestionsSource.default.toString()
    },
    {
      name: "With value suggestions",
      component: <ValueSuggestions />,
      source: ValueSuggestionsSource.default.toString()
    }
  ]
};
