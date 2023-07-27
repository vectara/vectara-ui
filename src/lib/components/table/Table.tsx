import { VuiCheckbox, VuiTextInput } from "../form";
import { VuiSpacer } from "../spacer/Spacer";
import { Props as TableRowActionsProps, VuiTableRowActions } from "./TableRowActions";
import { VuiTableCell } from "./TableCell";
import { Props as TableHeaderCellProps, VuiTableHeaderCell } from "./TableHeaderCell";
import { Pagination, VuiTablePagination } from "./TablePagination";
import { Pager, VuiTablePager } from "./TablePager";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTableBulkActions } from "./TableBulkActions";
import React, { useState } from "react";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiTableContent } from "./TableContent";

// Type guard to determine type of pagination.
const isComplexPagination = (pagination: Pagination | Pager): pagination is Pagination => {
  return (pagination as Pagination).onSelectPage !== undefined;
};

type Row = Record<string, any> & {
  id: string | number;
};

type Column<T> = {
  name: string;
  width?: string;
  header: TableHeaderCellProps["header"];
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  isLoading?: boolean;
  columns: Column<T>[];
  rows: T[];
  actions?: TableRowActionsProps["actions"];
  pagination: Pagination | Pager;
  selection?: Selection<T>;
  search?: Search;
  onSort?: TableHeaderCellProps["onSort"];
  content?: React.ReactNode;
};

type Selection<T> = {
  bulkActions?: TableRowActionsProps["actions"];
  onSelectRow?: (selectedRows: T[]) => void;
  selectedRows?: T[];
};

type Search = {
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
};

// https://github.com/typescript-eslint/typescript-eslint/issues/4062
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const VuiTable = <T extends Row>({
  isLoading,
  columns,
  rows,
  actions,
  pagination,
  selection,
  search,
  onSort,
  content,
  ...rest
}: Props<T>) => {
  const [rowBeingActedUpon, setRowBeingActedUpon] = useState<T | undefined>(undefined);

  const { bulkActions, onSelectRow, selectedRows } = selection || {};
  const { searchValue, searchPlaceholder, onSearchChange } = search || {};

  const isEmpty = !isLoading && rows.length === 0;
  const isInteractive = Boolean(!content && !isLoading && !isEmpty);

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
      {(hasSearch || (hasBulkActions && selectedRows && selectedRows.length > 0)) && (
        <>
          <VuiFlexContainer spacing="xl" justifyContent="spaceBetween" alignItems="center">
            {/* Search */}
            {hasSearch && (
              <VuiFlexItem grow={1} shrink={false}>
                <VuiTextInput
                  placeholder={searchPlaceholder}
                  fullWidth
                  value={searchValue}
                  onChange={(event) => onSearchChange(event.target.value)}
                />
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
                    disabled={!isInteractive}
                    checked={isInteractive ? allRowsSelected : false}
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
      {isComplexPagination(pagination) ? (
        <>
          <VuiSpacer size="xs" />
          <VuiTablePagination isDisabled={!isInteractive} {...pagination} />
        </>
      ) : (
        <>
          <VuiSpacer size="xs" />
          <VuiTablePager isDisabled={!isInteractive} {...pagination} />
        </>
      )}
    </>
  );
};
