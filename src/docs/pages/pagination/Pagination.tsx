import { useState } from "react";
import { VuiPagination, VuiSpacer, VuiToggle } from "../../../lib";

export const Pagination = () => {
  const [hasPager, setHasPager] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <VuiToggle label="Has pager" checked={hasPager} onChange={(e) => setHasPager(e.target.checked)} />
      <VuiSpacer size="m" />
      <VuiPagination currentPage={currentPage} numPages={20} onSelectPage={(page: number) => setCurrentPage(page)} />
    </>
  );
};
