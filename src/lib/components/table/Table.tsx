import { VuiCheckbox, VuiTextInput } from "../form";
import { VuiSpacer } from "../spacer/Spacer";
import { Props as TableRowActionsProps, VuiTableRowActions } from "./TableRowActions";
import { VuiTableCell } from "./TableCell";
import { Props as TableHeaderCellProps, VuiTableHeaderCell } from "./TableHeaderCell";
import { Props as TablePaginationProps, VuiTablePagination } from "./TablePagination";
import { Props as TablePagerProps, VuiTablePager } from "./TablePager";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTableBulkActions } from "./TableBulkActions";
import React, { useState } from "react";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiTableContent } from "./TableContent";

type Row = Record<string, any> & {
  id: string | number;
};

type Column<T> = {
  name: string;
  width?: string;
  header: TableHeaderCellProps["header"];
  render?: (row: T) => React.ReactNode;
};

type Props<T> = Partial<TablePaginationProps> &
  Partial<TablePagerProps> & {
    isLoading?: boolean;
    columns: Column<T>[];
    rows: T[];
    actions?: TableRowActionsProps["actions"];
    bulkActions?: TableRowActionsProps["actions"];
    onSelectRow?: (selectedRows: T[]) => void;
    selectedRows?: T[];
    onSort?: TableHeaderCellProps["onSort"];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    content?: React.ReactNode;
  };

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiTable = <T extends Row>({
  isLoading,
  columns,
  rows,
  actions,
  currentPage,
  numPages,
  onSelectPage,
  onSelectPreviousPage,
  onSelectNextPage,
  selectedRows,
  onSelectRow,
  onSort,
  searchValue,
  onSearchChange,
  bulkActions,
  content,
  ...rest
}: Props<T>) => {
  const [rowBeingActedUpon, setRowBeingActedUpon] = useState<T | undefined>(undefined);

  const isEmpty = !isLoading && rows.length === 0;

  const allRowsSelected = selectedRows?.length === rows.length;
  const selectedIds: Record<string, boolean> =
    selectedRows?.reduce((acc, row) => {
      acc[row.id] = true;
      return acc;
    }, {} as Record<string, boolean>) || {};

  const hasSearch = searchValue !== undefined && onSearchChange;
  const hasBulkActions = bulkActions !== undefined;
  const columnCount = columns.length + (onSelectRow ? 1 : 0) + (actions ? 1 : 0);

  let tableContent;

  if (content) {
    tableContent = <VuiTableContent columnCount={columnCount}>{content}</VuiTableContent>;
  } else if (isLoading) {
    tableContent = (
      <VuiTableContent columnCount={columnCount}>
        <VuiFlexItem grow={false}>
          <VuiSpinner size="xs" />
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiText>
            <p>Loading</p>
          </VuiText>
        </VuiFlexItem>
      </VuiTableContent>
    );
  } else if (searchValue && isEmpty) {
    tableContent = (
      <VuiTableContent columnCount={columnCount}>
        <VuiFlexItem grow={false}>
          <VuiText>
            <p>No matches found</p>
          </VuiText>
        </VuiFlexItem>
      </VuiTableContent>
    );
  } else {
    tableContent = rows.map((row) => {
      return (
        <tr key={row.id} className={rowBeingActedUpon === row ? "vuiTableRow-isBeingActedUpon" : undefined}>
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
              <VuiTableRowActions
                row={row}
                actions={actions}
                onToggle={(isSelected: boolean) => {
                  if (isSelected) {
                    setRowBeingActedUpon(row);
                  } else {
                    setRowBeingActedUpon(undefined);
                  }
                }}
              />
            </td>
          )}
        </tr>
      );
    });
  }

  return (
    <>
      {(hasSearch || hasBulkActions) && (
        <>
          <VuiFlexContainer spacing="xl" justifyContent="spaceBetween" alignItems="center">
            {/* Search */}
            {hasSearch && (
              <VuiFlexItem grow={1} shrink={false}>
                <VuiTextInput fullWidth value={searchValue} onChange={(event) => onSearchChange(event.target.value)} />
              </VuiFlexItem>
            )}

            {/* Selection and bulk actions */}
            {selectedRows && selectedRows.length > 0 && (
              <VuiFlexItem grow={false} shrink={false}>
                <VuiFlexContainer spacing="s" justifyContent="spaceBetween" alignItems="center">
                  <VuiFlexItem grow={false} shrink={false}>
                    <VuiText size="s">
                      <p>
                        <VuiTextColor color="subdued">{selectedRows.length} selected</VuiTextColor>
                      </p>
                    </VuiText>
                  </VuiFlexItem>

                  {hasBulkActions && (
                    <VuiFlexItem grow={false} shrink={false}>
                      <VuiTableBulkActions selectedRows={selectedRows} actions={bulkActions} />
                    </VuiFlexItem>
                  )}
                </VuiFlexContainer>
              </VuiFlexItem>
            )}
          </VuiFlexContainer>

          <VuiSpacer size="s" />
        </>
      )}

      <table className="vuiTable" {...rest}>
        <thead>
          <tr>
            {/* Checkbox column */}
            {onSelectRow && (
              <th className="vuiTableHeaderSelect">
                <VuiTableCell>
                  <VuiCheckbox
                    disabled={isLoading || isEmpty}
                    checked={isLoading || isEmpty ? false : allRowsSelected}
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
              const { name, header, width } = column;
              const styles = width ? { width } : undefined;

              return (
                <th key={name} style={styles}>
                  <VuiTableHeaderCell name={name} header={header} onSort={onSort} />
                </th>
              );
            })}

            {/* Actions column */}
            {actions && <th className="vuiTableHeaderActions" />}
          </tr>
        </thead>

        <tbody>{tableContent}</tbody>
      </table>

      {/* Pagination */}
      <div className={isLoading || isEmpty ? "vuiTablePagination-isDisabled" : undefined}>
        {currentPage && numPages && onSelectPage && numPages > 1 ? (
          <>
            <VuiSpacer size="xs" />
            <VuiTablePagination currentPage={currentPage} numPages={numPages} onSelectPage={onSelectPage} />
          </>
        ) : (
          <>
            <VuiSpacer size="xs" />
            <VuiTablePager onSelectPreviousPage={onSelectPreviousPage} onSelectNextPage={onSelectNextPage} />
          </>
        )}
      </div>
    </>
  );
};
