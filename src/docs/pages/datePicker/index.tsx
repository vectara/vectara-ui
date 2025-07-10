import { DatePicker } from "./DatePicker";
import { Inline } from "./Inline";
import { DateRangePicker } from "./DateRangePicker";

const DatePickerSource = require("!!raw-loader!./DatePicker");
const InlineSource = require("!!raw-loader!./Inline");
const DateRangePickerSource = require("!!raw-loader!./DateRangePicker");

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
    },
    {
      name: "Date range",
      component: <DateRangePicker />,
      source: DateRangePickerSource.default.toString()
    }
  ]
};
