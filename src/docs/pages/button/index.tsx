import { ButtonSizes } from "./ButtonSizes";
import { ButtonTypes } from "./ButtonTypes";
import { Icons } from "./Icons";
import { ButtonIcons } from "./ButtonIcons";
import { Pressed } from "./Pressed";

const ButtonTypesSource = require("!!raw-loader!./ButtonTypes");
const ButtonSizesSource = require("!!raw-loader!./ButtonTypes");
const IconsSource = require("!!raw-loader!./Icons");
const ButtonIconSource = require("!!raw-loader!./ButtonIcons");
const PressedSource = require("!!raw-loader!./Pressed");

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
      name: "Icons",
      component: <Icons />,
      source: IconsSource.default.toString()
    },
    {
      name: "ButtonIcon",
      component: <ButtonIcons />,
      source: ButtonIconSource.default.toString()
    },
    {
      name: "Pressed state",
      component: <Pressed />,
      source: PressedSource.default.toString()
    }
  ]
};
