const MAX_PAGES = 5;
const TRUNCATION_LIMIT = 3;

export const createPagination = (page: number, numPages: number) => {
  if (numPages <= MAX_PAGES) {
    // 1 2 3 4 5
    return {
      items: Array.from({ length: numPages }, (_, i) => i + 1),
      activeIndex: page - 1
    };
  }

  let activeIndex;
  const items: Array<"..." | number> = [1];

  if (page > TRUNCATION_LIMIT && page < numPages - TRUNCATION_LIMIT) {
    // 1 ... [15] ... 60
    activeIndex = 2;
    items.push("...");
    items.push(page);
    items.push("...");
  } else if (page > TRUNCATION_LIMIT) {
    // 1 ... [4] 5 6
    // 1 ... 4 [5] 6
    const lastIndex = MAX_PAGES - 1;
    activeIndex = lastIndex - (numPages - page);
    items.push("...");
    items.push(numPages - 2);
    items.push(numPages - 1);
  } else if (page < numPages - TRUNCATION_LIMIT) {
    // 1 [2] 3 ... 6
    // 1 2 [3] ... 6
    activeIndex = page - 1;
    items.push(2);
    items.push(3);
    items.push("...");
  }

  items.push(numPages);

  return {
    items,
    activeIndex
  };
};
