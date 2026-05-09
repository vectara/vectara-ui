import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { PasswordInput } from "./PasswordInput";
import { FullWidth } from "./FullWidth";
import { Sizes } from "./Sizes";

const TextInputSource = require("!!raw-loader!./TextInput");
const NumberInputSource = require("!!raw-loader!./NumberInput");
const PasswordInputSource = require("!!raw-loader!./PasswordInput");
const FullWidthSource = require("!!raw-loader!./FullWidth");
const SizesSource = require("!!raw-loader!./Sizes");

export const input = {
  name: "Input",
  path: "/input",
  examples: [
    {
      name: "Text input",
      component: <TextInput />,
      source: TextInputSource.default.toString()
    },
    {
      name: "Number input",
      component: <NumberInput />,
      source: NumberInputSource.default.toString()
    },
    {
      name: "Password input",
      component: <PasswordInput />,
      source: PasswordInputSource.default.toString()
    },
    {
      name: "Full width",
      component: <FullWidth />,
      source: FullWidthSource.default.toString()
    },
    {
      name: "Sizes",
      component: <Sizes />,
      source: SizesSource.default.toString()
    }
  ]
};
