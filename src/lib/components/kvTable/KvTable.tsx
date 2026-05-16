import classNames from "classnames";
import { KvTableAlign, KvTableItem, KvTableItems, KvTablePadding } from "./types";

function normalizeItems(items: KvTableItems): KvTableItem[] {
  if (Array.isArray(items)) return items;
  return Object.entries(items).map(([key, value]) => ({
    key,
    value: value == null ? "" : String(value)
  }));
}

const paddingToClassMap: Record<KvTablePadding, string> = {
  xxs: "vuiKvTable--paddingXxs",
  xs: "vuiKvTable--paddingXs",
  s: "vuiKvTable--paddingS"
};

const alignToClassMap: Record<KvTableAlign, string> = {
  top: "vuiKvTable--alignTop",
  middle: "vuiKvTable--alignMiddle",
  bottom: "vuiKvTable--alignBottom"
};

type Props = {
  items: KvTableItems;
  keyHeader?: React.ReactNode;
  valueHeader?: React.ReactNode;
  // Describes the table for screen readers when column headers are omitted.
  label?: string;
  padding?: KvTablePadding;
  align?: KvTableAlign;
  "data-testid"?: string;
};

export const VuiKvTable = ({
  items,
  keyHeader,
  valueHeader,
  label,
  padding = "xs",
  align = "middle",
  ...rest
}: Props) => {
  const hasHeader = keyHeader !== undefined || valueHeader !== undefined;
  const classes = classNames("vuiKvTable", paddingToClassMap[padding], alignToClassMap[align]);
  const normalizedItems = normalizeItems(items);

  return (
    <dl className={classes} aria-label={label} {...rest}>
      {hasHeader && (
        <div className="vuiKvTableRow vuiKvTableRow--header">
          <dt className="vuiKvTableCell--key">{keyHeader}</dt>
          <dd className="vuiKvTableCell--value">{valueHeader}</dd>
        </div>
      )}

      {normalizedItems.map((item, i) => (
        <div key={i} className="vuiKvTableRow">
          <dt className="vuiKvTableCell--key">{item.key}</dt>
          <dd className="vuiKvTableCell--value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};
