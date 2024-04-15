import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { PasswordInput } from "./PasswordInput";
import { FullWidth } from "./FullWidth";
import { Large } from "./Large";

const TextInputSource = require("!!raw-loader!./TextInput");
const NumberInputSource = require("!!raw-loader!./NumberInput");
const PasswordInputSource = require("!!raw-loader!./PasswordInput");
const FullWidthSource = require("!!raw-loader!./FullWidth");
const LargeSource = require("!!raw-loader!./Large");

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
      name: "Large size",
      component: <Large />,
      source: LargeSource.default.toString()
    }
  ]
};
