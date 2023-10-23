import { Summary } from "./Summary";
import { Rtl } from "./Rtl";
import { Markdown } from "./Markdown";

const SummarySource = require("!!raw-loader!./Summary");
const RtlSource = require("!!raw-loader!./Rtl");
const MarkdownSource = require("!!raw-loader!./Markdown");

export const summary = {
  name: "Summary",
  path: "/summary",
  examples: [
    {
      name: "Markdown",
      component: <Markdown />,
      source: MarkdownSource.default.toString()
    },
    {
      name: "Vanilla",
      component: <Summary />,
      source: SummarySource.default.toString()
    },
    {
      name: "Right-to-left languages",
      component: <Rtl />,
      source: RtlSource.default.toString()
    }
  ]
};
