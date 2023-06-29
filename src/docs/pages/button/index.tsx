import { ButtonTypes } from "./ButtonTypes";
const ButtonTypesSource = require("!!raw-loader!./ButtonTypes");

export const button = {
  name: "Button",
  path: "/button",
  examples: [
    {
      name: "Button types",
      component: <ButtonTypes />,
      source: ButtonTypesSource.default.toString()
    }
  ]
};
