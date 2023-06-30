import { Text } from "./Text";
import { TextColor } from "./TextColor";

const TextSource = require("!!raw-loader!./Text");
const TextColorSource = require("!!raw-loader!./TextColor");

export const text = {
  name: "Text",
  path: "/text",
  examples: [
    {
      name: "Typographic elements",
      component: <Text />,
      source: TextSource.default.toString()
    },
    {
      name: "Color",
      component: <TextColor />,
      source: TextColorSource.default.toString()
    }
  ]
};
