import { Basic } from "./Basic";
import { Nested } from "./Nested";

const BasicSource = require("!!raw-loader!./Basic");
const NestedSource = require("!!raw-loader!./Nested");

export const treeMap = {
  name: "Tree map",
  path: "/tree-map",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Nested",
      component: <Nested />,
      source: NestedSource.default.toString()
    }
  ]
};
