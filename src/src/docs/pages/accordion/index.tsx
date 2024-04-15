import { Accordion } from "./Accordion";
const AccordionSource = require("!!raw-loader!./Accordion");

export const accordion = {
  name: "Accordion",
  path: "/accordion",
  examples: [
    {
      component: <Accordion />,
      source: AccordionSource.default.toString()
    }
  ]
};
