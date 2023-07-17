import { VuiCheckbox } from "../form";
import { VuiSpacer } from "../spacer/Spacer";
import { Props as TableRowActionsProps, VuiTableRowActions } from "./TableRowActions";
import { VuiTableCell } from "./TableCell";
import { Props as TableHeaderCellProps, VuiTableHeaderCell } from "./TableHeaderCell";
import { Props as TablePaginationProps, VuiTablePagination } from "./TablePagination";

type Row = Record<string, any> & {
  id: string;
};

type Column<T> = {
  name: string;
  header: TableHeaderCellProps["header"];
  render?: (row: T) => React.ReactNode;
};

type Props<T> = Partial<TablePaginationProps> & {
  columns: Column<T>[];
  rows?: T[];
  actions?: TableRowActionsProps["actions"];
  onSelectRow?: (selectedRows: T[]) => void;
  selectedRows?: T[];
  onSort?: TableHeaderCellProps["onSort"];
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiTable = <T extends Row>({
  columns,
  rows = [],
  actions,
  rowsPerPage,
  page,
  numPages,
  onSelectPage,
  selectedRows,
  onSelectRow,
  onSort,
  ...rest
}: Props<T>) => {
  const numRowsVisible = rows.length; // TODO: Calculate this based on pagination if we're on the last page.
  const allRowsSelected = selectedRows?.length === numRowsVisible;
  const selectedIds: Record<string, boolean> =
    selectedRows?.reduce((acc, row) => {
      acc[row.id] = true;
      return acc;
    }, {} as Record<string, boolean>) || {};

  return (
    <>
      <table className="vuiTable" {...rest}>
        <thead>
          <tr>
            {/* Checkbox column */}
            {onSelectRow && (
              <th>
                <VuiTableCell>
                  <VuiCheckbox
                    checked={allRowsSelected}
                    onChange={() => {
                      let newSelectedRows: T[];

                      if (allRowsSelected) {
                        newSelectedRows = [];
                      } else {
                        newSelectedRows = rows.reduce((acc, row) => {
                          acc.push(row);
                          return acc;
                        }, [] as T[]);
                      }

                      onSelectRow(newSelectedRows);
                    }}
                  />
                </VuiTableCell>
              </th>
            )}

            {/* Row info */}
            {columns.map((column) => {
              const { name, header } = column;

              return (
                <th key={name}>
                  <VuiTableHeaderCell name={name} header={header} onSort={onSort} />
                </th>
              );
            })}

            {/* Actions column */}
            {actions && <th />}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                {/* Checkbox column */}
                {onSelectRow && (
                  <td>
                    <VuiTableCell>
                      <VuiCheckbox
                        checked={selectedIds[row.id] ?? false}
                        onChange={() => {
                          if (selectedIds[row.id]) {
                            delete selectedIds[row.id];
                          } else {
                            selectedIds[row.id] = true;
                          }

                          onSelectRow(Object.keys(selectedIds).map((id) => rows.find((row) => row.id === id) as T));
                        }}
                      />
                    </VuiTableCell>
                  </td>
                )}

                {/* Row info */}
                {columns.map((column) => {
                  const { name, render } = column;

                  return (
                    <td key={name}>
                      <VuiTableCell>{render ? render(row) : row[column.name]}</VuiTableCell>
                    </td>
                  );
                })}

                {/* Actions column */}
                {actions && (
                  <td>
                    <VuiTableRowActions row={row} actions={actions} />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      {rowsPerPage && page && numPages && onSelectPage && (
        <>
          <VuiSpacer size="xs" />
          <VuiTablePagination rowsPerPage={rowsPerPage} page={page} numPages={numPages} onSelectPage={onSelectPage} />
        </>
      )}
    </>
  );
};
