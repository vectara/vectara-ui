import { TextArea } from "./TextArea";
import { TextAreaResizeable } from "./TextAreaResizeable";

const TextAreaSource = require("!!raw-loader!./TextArea");
const TextAreaResizeableSource = require("!!raw-loader!./TextAreaResizeable");

export const textArea = {
  name: "TextArea",
  path: "/textArea",
  examples: [
    {
      name: "TextArea",
      component: <TextArea />,
      source: TextAreaSource.default.toString()
    },
    {
      name: "Resizable TextArea",
      component: <TextAreaResizeable />,
      source: TextAreaResizeableSource.default.toString()
    }
  ]
};
