import { ButtonSizes } from "./ButtonSizes";
import { ButtonTypes } from "./ButtonTypes";
import { ButtonIcons } from "./ButtonIcons";

const ButtonTypesSource = require("!!raw-loader!./ButtonTypes");
const ButtonSizesSource = require("!!raw-loader!./ButtonTypes");
const ButtonIconsSource = require("!!raw-loader!./ButtonIcons");

export const button = {
  name: "Button",
  path: "/button",
  examples: [
    {
      name: "Colors",
      component: <ButtonTypes />,
      source: ButtonTypesSource.default.toString()
    },
    {
      name: "Sizes",
      component: <ButtonSizes />,
      source: ButtonSizesSource.default.toString()
    },
    {
      name: "Icon",
      component: <ButtonIcons />,
      source: ButtonIconsSource.default.toString()
    }
  ]
};
