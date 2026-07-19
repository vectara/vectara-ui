import { Basic } from "./Basic";

const BasicSource = require("!!raw-loader!./Basic");

export const diffViewer = {
  name: "Diff viewer",
  path: "/diff-viewer",
  example: {
    component: <Basic />,
    source: BasicSource.default.toString()
  }
};
