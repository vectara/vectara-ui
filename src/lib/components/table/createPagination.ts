const MAX_ITEMS = 5;
const MAX_TRUNCATE = 3;

export const createPagination = (page: number, numPages: number) => {
  if (numPages <= MAX_ITEMS) {
    // 1 2 3 4 5
    return {
      items: Array.from({ length: numPages }, (_, i) => i + 1),
      activeIndex: page - 1
    };
  }

  let activeIndex;
  const items: Array<"..." | number> = [1];

  if (page > MAX_TRUNCATE && page < numPages - MAX_TRUNCATE) {
    // 1 ... [15] ... 60
    activeIndex = 2;
    items.push("...");
    items.push(page);
    items.push("...");
  } else if (page > MAX_TRUNCATE) {
    // 1 ... [4] 5 6
    // 1 ... 4 [5] 6
    const lastIndex = MAX_ITEMS - 1;
    activeIndex = lastIndex - (numPages - page);
    items.push("...");
    items.push(numPages - 2);
    items.push(numPages - 1);
  } else if (page < numPages - MAX_TRUNCATE) {
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
