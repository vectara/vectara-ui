import { TextArea } from "./TextArea";
import { TextAreaResizeable } from "./TextAreaResizeable";

const TextAreaSource = require("!!raw-loader!./TextArea");
const TextAreaResizeableSource = require("!!raw-loader!./TextAreaResizeable");

export const textArea = {
  name: "Text Area",
  path: "/textArea",
  examples: [
    {
      name: "Text Area",
      component: <TextArea />,
      source: TextAreaSource.default.toString()
    },
    {
      name: "Resizable Text Area",
      component: <TextAreaResizeable />,
      source: TextAreaResizeableSource.default.toString()
    }
  ]
};
