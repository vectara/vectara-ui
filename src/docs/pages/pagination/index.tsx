import { Pagination } from "./Pagination";

const PaginationSource = require("!!raw-loader!./Pagination");

export const pagination = {
  name: "Pagination",
  path: "/pagination",
  examples: [
    {
      name: "Pagination",
      component: <Pagination />,
      source: PaginationSource.default.toString()
    }
  ]
};
