import { BiSolidUpArrowAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiIcon } from "../icon/Icon";
import { Column, OnSort, Row } from "./types";
import BidirectionalArrow from "./BidirectionalArrow";
import { VuiIconButton } from "../button/IconButton";

export type Props<T> = {
  column: Column<T>;
  onSort?: OnSort;
  sortDirection: "asc" | "desc" | "none";
  isActive: boolean;
};

export const VuiTableHeaderCell = <T extends Row>({ column, onSort, sortDirection, isActive }: Props<T>) => {
  const { name, header } = column;

  const handleSort = () => {
    let newSortDirection: "asc" | "desc" | "none";

    if (sortDirection === "asc") {
      newSortDirection = "desc";
    } else if (sortDirection === "desc") {
      newSortDirection = "none";
    } else {
      newSortDirection = "asc";
    }

    onSort?.(name, newSortDirection);
  };

  let ariaLabel;
  if (sortDirection === "asc") {
    ariaLabel = "Sort ascending";
  } else if (sortDirection === "desc") {
    ariaLabel = "Sort descending";
  } else {
    ariaLabel = "No sorting";
  }

  const isSortable = onSort && header.isSortable;

  return (
    <VuiFlexContainer spacing="xxs" alignItems="center" justifyContent="start">
      <div 
        className="vuiTableHeaderCell"
        {...(isSortable && {
          onClick: handleSort,
          // This is so that the div is not read by screen readers, the VuiIconButton will handle the announcement 
          "aria-hidden": "true",
          style: { cursor: "pointer" }
        })}
      >
        <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>

        {onSort && isSortable && (
          <VuiIconButton
            isSelected={isActive}
            color="neutral"
            size="s"
            aria-label={ariaLabel}
            onClick={handleSort}
            icon={
              <VuiIcon
                className={`vuiTableHeaderCell__icon ` + (sortDirection === "desc" && "vuiTableHeaderCell__icon--desc")}
                size="s"
              >
                {sortDirection === "none" ? <BidirectionalArrow /> : <BiSolidUpArrowAlt />}
              </VuiIcon>
            }
          />
        )}
      </div>
    </VuiFlexContainer>
  );
};
