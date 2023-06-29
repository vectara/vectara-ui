import { Setting } from "./Setting";
import { MinimalSetting } from "./MinimalSetting";

const SettingSource = require("!!raw-loader!./Setting");
const MinimalSettingSource = require("!!raw-loader!./MinimalSetting");

export const setting = {
  name: "Setting",
  path: "/setting",
  examples: [
    {
      name: "Setting",
      component: <Setting />,
      source: SettingSource.default.toString()
    },
    {
      name: "Minimal Setting",
      component: <MinimalSetting />,
      source: MinimalSettingSource.default.toString()
    }
  ]
};
