import { SearchSelect } from "./SearchSelect";
import { Async } from "./Async";
import { SingleSelect } from "./SingleSelect";
import { FormGroup } from "./FormGroup";
import { WithBadges } from "./WithBadges";

const SearchSelectSource = require("!!raw-loader!./SearchSelect");
const AsyncSource = require("!!raw-loader!./Async");
const SingleSelectSource = require("!!raw-loader!./SingleSelect");
const FormGroupSource = require("!!raw-loader!./FormGroup");
const WithBadgesSource = require("!!raw-loader!./WithBadges");

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
    },
    {
      name: "With badges and clear all",
      component: <WithBadges />,
      source: WithBadgesSource.default.toString()
    },
    {
      name: "Form group",
      component: <FormGroup />,
      source: FormGroupSource.default.toString()
    }
  ]
};
