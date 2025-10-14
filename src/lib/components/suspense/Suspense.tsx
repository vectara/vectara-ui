import classNames from "classnames";

export const SUSPENSE_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral", "subdued"] as const;

type Props = {
  rows?: number;
  color?: (typeof SUSPENSE_COLOR)[number];
  active?: boolean;
  height?: string | number;
  className?: string;
};

export const VuiSuspense = ({ rows = 2.75, color = "subdued", active = true, height = "1rem", className }: Props) => {
  const classes = classNames(className, "vuiSuspense__row", `vuiSuspense--${color}`, {
    "vuiSuspense--active": active
  });

  const fullRows = Math.floor(rows);
  const partialRowWidth = rows % 1;

  const renderRows = () => {
    const rowElements = [];

    // Render full rows
    for (let i = 0; i < fullRows; i++) {
      rowElements.push(
        <div
          key={`full-${i}`}
          className={classes}
          style={{ height }}
        />
      );
    }

    // Render partial row if there's a decimal component
    if (partialRowWidth > 0) {
      rowElements.push(
        <div
          key="partial"
          className={classes}
          style={{ width: `${partialRowWidth * 100}%`, height }}
        />
      );
    }

    return rowElements;
  };

  return (
    <>
      {renderRows()}
    </>
  );
};