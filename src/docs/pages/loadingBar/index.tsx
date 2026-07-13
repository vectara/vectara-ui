import { LoadingBar } from "./LoadingBar";
const LoadingBarSource = require("!!raw-loader!./LoadingBar");

export const loadingBar = {
  name: "Loading Bar",
  path: "/loadingBar",
  example: {
    component: <LoadingBar />,
    source: LoadingBarSource.default.toString()
  }
};
