import { useState } from "react";
import { VuiPagination } from "../../../lib";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <VuiPagination currentPage={currentPage} numPages={20} onSelectPage={(page: number) => setCurrentPage(page)} />
    </>
  );
};
