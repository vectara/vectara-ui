import { Typography } from "./Typography";
import { Title } from "./Title";
import { Text } from "./Text";
import { TextColor } from "./TextColor";

const TypographySource = require("!!raw-loader!./Typography");
const TitleSource = require("!!raw-loader!./Title");
const TextSource = require("!!raw-loader!./Text");
const TextColorSource = require("!!raw-loader!./TextColor");

export const text = {
  name: "Text",
  path: "/text",
  examples: [
    {
      name: "Typography",
      component: <Typography />,
      source: TypographySource.default.toString()
    },
    {
      name: "Titles",
      component: <Title />,
      source: TitleSource.default.toString()
    },
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
