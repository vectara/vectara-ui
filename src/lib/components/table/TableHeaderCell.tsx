import { BiSolidUpArrowAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiIcon } from "../icon/Icon";
import { Column, OnSort, Row } from "./types";
import BidirectionalArrow from "./BidirectionalArrow";
import { VuiTooltip } from "../tooltip/Tooltip";

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
    ariaLabel = "Sort descending";
  } else if (sortDirection === "desc") {
    ariaLabel = "No sorting";
  } else {
    ariaLabel = "Sort ascending";
  }

  const isSortable = onSort && header.isSortable;

  return (
    <VuiFlexContainer spacing="xxs" alignItems="center" justifyContent="start">
      {onSort && isSortable ? (
        <VuiTooltip tip={ariaLabel}>
          <button className="vuiTableHeaderCell--sortable" onClick={handleSort} aria-label={ariaLabel} type="button">
            <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>
            <VuiIcon
              className={`vuiTableHeaderCell__icon ` + (sortDirection === "desc" && "vuiTableHeaderCell__icon--desc")}
              size="s"
            >
              {sortDirection === "none" ? <BidirectionalArrow /> : <BiSolidUpArrowAlt />}
            </VuiIcon>
          </button>
        </VuiTooltip>
      ) : (
        <div className="vuiTableHeaderCell__label">{header.render ? header.render() : name}</div>
      )}
    </VuiFlexContainer>
  );
};
