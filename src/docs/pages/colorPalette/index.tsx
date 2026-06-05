import { Usage } from "./Usage";
import { SemanticColors } from "./SemanticColors";
import { CategoricalColors } from "./CategoricalColors";
import { ChartColors } from "./ChartColors";
import { NeutralColors } from "./NeutralColors";
import { TextAndBorderColors } from "./TextAndBorderColors";

const UsageSource = require("!!raw-loader!./Usage");
const SemanticColorsSource = require("!!raw-loader!./SemanticColors");
const CategoricalColorsSource = require("!!raw-loader!./CategoricalColors");
const ChartColorsSource = require("!!raw-loader!./ChartColors");
const NeutralColorsSource = require("!!raw-loader!./NeutralColors");
const TextAndBorderColorsSource = require("!!raw-loader!./TextAndBorderColors");

export const colorPalette = {
  name: "Color palette",
  path: "/colorPalette",
  examples: [
    {
      name: "Using color variables",
      component: <Usage />,
      source: UsageSource.default.toString()
    },
    {
      name: "Semantic colors",
      component: <SemanticColors />,
      source: SemanticColorsSource.default.toString()
    },
    {
      name: "Categorical colors",
      component: <CategoricalColors />,
      source: CategoricalColorsSource.default.toString()
    },
    {
      name: "Chart colors",
      component: <ChartColors />,
      source: ChartColorsSource.default.toString()
    },
    {
      name: "Neutral and special colors",
      component: <NeutralColors />,
      source: NeutralColorsSource.default.toString()
    },
    {
      name: "Text and border colors",
      component: <TextAndBorderColors />,
      source: TextAndBorderColorsSource.default.toString()
    }
  ]
};
