import classNames from "classnames";

const PADDING = ["xxs", "xs", "s"] as const;

type Column = {
  name: string;
  render: React.ReactNode;
  width?: string;
};

export type InfoTableRowType = "sectionHeader" | "footer";

type Row = {
  type?: InfoTableRowType;
  values: Record<
    string,
    | {
        render: React.ReactNode;
        colSpan?: number;
      }
    | undefined
  >;
};

type Props = {
  columns: Column[];
  rows: Row[];
  isHeaderVisible?: boolean;
  padding?: (typeof PADDING)[number];
};

const paddingToClassMap = {
  xxs: "vuiInfoTable--paddingXxs",
  xs: "vuiInfoTable--paddingXs",
  s: "vuiInfoTable--paddingS"
};

const typeToRowClassMap = {
  sectionHeader: "vuiInfoTableRow--sectionHeader",
  footer: "vuiInfoTableRow--footer"
};

export const VuiInfoTable = ({ columns, rows, isHeaderVisible, padding = "xs" }: Props) => {
  const classes = classNames("vuiInfoTable", paddingToClassMap[padding]);

  return (
    <table className={classes}>
      {isHeaderVisible && (
        <thead>
          <tr>
            {columns.map(({ name, render, width }) => (
              <th key={name} style={{ width }}>
                {render}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {rows.map(({ values, type }, index) => {
          const rowClasses = type && typeToRowClassMap[type];
          return (
            <tr key={index} className={rowClasses}>
              {columns.map(({ name, width }) => {
                const value = values[name];
                if (value !== undefined) {
                  return (
                    <td key={name} style={{ width }} colSpan={value.colSpan}>
                      {value.render}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
