import ReactDatePicker from "react-datepicker";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";

type Props = {
  isInline?: boolean;
  isRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  onChange?: (startDate: Date | undefined, endDate?: Date) => void;
  onReset?: () => void;
  onCancel?: () => void;
  placeholder?: string;
  "data-testid"?: string;
};

export const VuiCalendar = ({
  isInline,
  isRange,
  startDate,
  endDate,
  onChange,
  onReset,
  onCancel,
  placeholder,
  ...rest
}: Props) => {
  const props = {
    inline: true,
    todayButton: "Today",
    placeholderText: placeholder ?? (isRange ? "Select date range" : "Select date")
  };

  let calendar;

  if (isRange) {
    calendar = (
      <ReactDatePicker
        selectsRange
        swapRange
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => {
          onChange?.(dates?.[0] ?? undefined, dates?.[1] ?? undefined);
        }}
        {...props}
      />
    );
  } else {
    calendar = (
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => {
          onChange?.(date ?? undefined);
        }}
        {...props}
      />
    );
  }

  const classes = classNames("vuiDatePicker", {
    "vuiDatePicker--inline": isInline
  });

  const actions = (onReset || onCancel) && (
    <VuiFlexContainer className="vuiDateRangePickerActions" spacing="xxs">
      {onReset && (
        <VuiButtonSecondary size="xs" color="neutral" onClick={onReset} data-testid="vuiDateRangePickerResetButton">
          Clear
        </VuiButtonSecondary>
      )}

      {onCancel && (
        <VuiButtonSecondary size="xs" color="neutral" onClick={onCancel} data-testid="vuiDateRangePickerCancelButton">
          Cancel
        </VuiButtonSecondary>
      )}
    </VuiFlexContainer>
  );

  return (
    <div className={classes} {...rest}>
      {calendar}
      {actions}
    </div>
  );
};
