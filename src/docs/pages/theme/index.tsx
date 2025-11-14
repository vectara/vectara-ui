import { Theme } from "./Theme";

const ThemeSource = require("!!raw-loader!./Theme");

export const theme = {
  name: "Theme",
  path: "/theme",
  examples: [
    {
      name: "Theme",
      component: <Theme />,
      source: ThemeSource.default.toString()
    }
  ]
};
