import ReactDatePicker from "react-datepicker";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiTextInput } from "../form";
import { formatDate } from "../../utils";
import classNames from "classnames";

export type BasicProps = {
  placeholder?: string;
  "data-testid"?: string;
  fullWidth?: boolean;
};

type SingleDateProps = BasicProps & {
  isMultiDate?: false;
  date: Date | null | undefined;
  onChange?: (date: Date | null) => void;
};

type DateRangeProps = BasicProps & {
  isMultiDate: true;
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
  onChange?: (dates: [Date | null, Date | null]) => void;
};

type DatePickerProps = SingleDateProps | DateRangeProps;

type InlineProps = DatePickerProps & {
  isInline: true;
};

type InPopoverProps = DatePickerProps &
  Pick<PopoverProps, "isOpen" | "setIsOpen" | "anchorSide"> & {
    isInline?: false;
  };

type Props = InlineProps | InPopoverProps;

export const VuiDatePicker = ({
  placeholder = "Select date",
  isInline = false,
  isMultiDate = false,
  fullWidth,
  ...rest
}: Props) => {
  const classes = classNames("vuiDatePicker", {
    "vuiDatePicker--inline": isInline && !isMultiDate
  });

  let picker;

  if (isMultiDate) {
    const { startDate, endDate, onChange } = rest as DateRangeProps;
    picker = (
      <ReactDatePicker
        selectsRange
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        placeholderText={placeholder}
        inline
        todayButton="Today"
      />
    );
  } else {
    const { date, onChange } = rest as SingleDateProps;
    picker = (
      <ReactDatePicker selected={date} onChange={onChange} placeholderText={placeholder} inline todayButton="Today" />
    );
  }

  const datePicker = (
    <div className={classes} data-testid={rest["data-testid"]}>
      {picker}
    </div>
  );

  if (isInline) return datePicker;

  const { isOpen, setIsOpen, anchorSide } = rest as InPopoverProps;

  let input;

  if (isMultiDate) {
    const { startDate, endDate } = rest as DateRangeProps;
    const formattedStartDate = startDate ? formatDate(startDate) : "Unselected start date";
    const formattedEndDate = endDate ? formatDate(endDate) : "Unselected end date";
    input = <VuiTextInput value={`${formattedStartDate} to ${formattedEndDate}`} fullWidth={fullWidth} />;
  } else {
    const { date } = rest as SingleDateProps;
    input = <VuiTextInput value={date ? formatDate(date) : ""} fullWidth={fullWidth} />;
  }

  return (
    <VuiPopover isOpen={isOpen} setIsOpen={setIsOpen} button={input} anchorSide={anchorSide}>
      {datePicker}
    </VuiPopover>
  );
};
