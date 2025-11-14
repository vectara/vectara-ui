import "./spacerExample.scss";

import { Spacer } from "./Spacer";
const SpacerSource = require("!!raw-loader!./Spacer");

export const spacer = {
  name: "Spacer",
  path: "/spacer",
  example: {
    component: <Spacer />,
    source: SpacerSource.default.toString()
  }
};
