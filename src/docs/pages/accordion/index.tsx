import { Accordion } from "./Accordion";
import { AccordionFrameless } from "./AccordionFrameless";
import { AccordionNoPadding } from "./AccordionNoPadding";
import { AccordionHeaderSize } from "./AccordionHeaderSize";

const AccordionSource = require("!!raw-loader!./Accordion");
const AccordionFramelessSource = require("!!raw-loader!./AccordionFrameless");
const AccordionNoPaddingSource = require("!!raw-loader!./AccordionNoPadding");
const AccordionHeaderSizeSource = require("!!raw-loader!./AccordionHeaderSize");

export const accordion = {
  name: "Accordion",
  path: "/accordion",
  examples: [
    {
      name: "Basic",
      component: <Accordion />,
      source: AccordionSource.default.toString()
    },
    {
      name: "Frameless",
      component: <AccordionFrameless />,
      source: AccordionFramelessSource.default.toString()
    },
    {
      name: "No padding",
      component: <AccordionNoPadding />,
      source: AccordionNoPaddingSource.default.toString()
    },
    {
      name: "Header size",
      component: <AccordionHeaderSize />,
      source: AccordionHeaderSizeSource.default.toString()
    }
  ]
};
