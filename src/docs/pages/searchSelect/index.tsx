import { SearchSelect } from "./SearchSelect";
import { Async } from "./Async";
import { SingleSelect } from "./SingleSelect";
import { FormGroup } from "./FormGroup";

const SearchSelectSource = require("!!raw-loader!./SearchSelect");
const AsyncSource = require("!!raw-loader!./Async");
const SingleSelectSource = require("!!raw-loader!./SingleSelect");
const FormGroupSource = require("!!raw-loader!./FormGroup");

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
      name: "Form group",
      component: <FormGroup />,
      source: FormGroupSource.default.toString()
    }
  ]
};
