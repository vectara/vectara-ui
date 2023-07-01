import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";

const TextInputSource = require("!!raw-loader!./TextInput");
const NumberInputSource = require("!!raw-loader!./NumberInput");

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
    }
  ]
};
