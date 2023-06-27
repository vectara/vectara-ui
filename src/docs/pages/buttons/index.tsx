import { ButtonTypes } from "./ButtonTypes";
const ButtonTypesSource = require("!!raw-loader!./ButtonTypes");

export const buttons = {
  name: "Buttons",
  path: "/buttons",
  examples: [
    {
      name: "Button types",
      component: <ButtonTypes />,
      source: ButtonTypesSource.default.toString()
    }
  ]
};
