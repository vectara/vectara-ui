import { Composer } from "./Composer";
const ComposerSource = require("!!raw-loader!./Composer");

export const composer = {
  name: "Composer",
  path: "/composer",
  example: {
    component: <Composer />,
    source: ComposerSource.default.toString()
  }
};
