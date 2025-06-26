import { DatePicker } from "./DatePicker";
import { Inline } from "./Inline";

const DatePickerSource = require("!!raw-loader!./DatePicker");
const InlineSource = require("!!raw-loader!./Inline");

export const datePicker = {
  name: "Date Picker",
  path: "/datePicker",
  examples: [
    {
      name: "In popover",
      component: <DatePicker />,
      source: DatePickerSource.default.toString()
    },
    {
      name: "Inline",
      component: <Inline />,
      source: InlineSource.default.toString()
    }
  ]
};
