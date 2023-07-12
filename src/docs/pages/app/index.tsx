import { App } from "./App";
const AppSource = require("!!raw-loader!./App");

export const app = {
  name: "App",
  path: "/app",
  examples: [
    {
      component: <App />,
      source: AppSource.default.toString()
    }
  ]
};
