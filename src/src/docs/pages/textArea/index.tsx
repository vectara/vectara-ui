import { TextArea } from "./TextArea";
const TextAreaSource = require("!!raw-loader!./TextArea");

export const textArea = {
  name: "TextArea",
  path: "/textArea",
  examples: [
    {
      component: <TextArea />,
      source: TextAreaSource.default.toString()
    }
  ]
};
