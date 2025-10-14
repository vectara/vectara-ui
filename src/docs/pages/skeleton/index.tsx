import { Basic } from "./Basic";
import { CardContent } from "./CardContent";
import { Colors } from "./Colors";
import { Rows } from "./Rows";

const BasicSource = require("!!raw-loader!./Basic");
const ColorsSource = require("!!raw-loader!./Colors");
const RowsSource = require("!!raw-loader!./Rows");
const CardContentSource = require("!!raw-loader!./CardContent");

export const skeleton = {
  name: "Skeleton",
  path: "/skeleton",
  examples: [
    {
      name: "Basic",
      component: <Basic />,
      source: BasicSource.default.toString()
    },
    {
      name: "Rows",
      component: <Rows />,
      source: RowsSource.default.toString()
    },
    {
      name: "Card content",
      component: <CardContent />,
      source: CardContentSource.default.toString()
    },
    {
      name: "Colors",
      component: <Colors />,
      source: ColorsSource.default.toString()
    },
  ]
};