import { TextArea } from "./TextArea";
import { TextAreaResizeable } from "./TextAreaResizeable";
import { TextAreaAutoGrow } from "./TextAreaAutoGrow";

const TextAreaSource = require("!!raw-loader!./TextArea");
const TextAreaResizeableSource = require("!!raw-loader!./TextAreaResizeable");
const TextAreaAutoGrowSource = require("!!raw-loader!./TextAreaAutoGrow");

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
    },
    {
      name: "Auto-Grow Text Area",
      component: <TextAreaAutoGrow />,
      source: TextAreaAutoGrowSource.default.toString()
    }
  ]
};
