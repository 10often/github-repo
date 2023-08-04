export const collapsePaginator = (
  currentPage: number,
  hasPrev = false,
  hasNext = false
): number[] => {
  if (!hasPrev) {
    if (!hasNext) {
      return [];
    }
    return [1, 2, 0];
  }
  if (!hasNext || currentPage === 10) {
    return [0, currentPage - 1, currentPage];
  }
  if (hasPrev && hasNext) {
    if (currentPage === 2) {
      return [currentPage - 1, currentPage, currentPage + 1, 0];
    }
    if (currentPage === 9) {
      return [0, currentPage - 1, currentPage, currentPage + 1];
    }
    return [0, currentPage - 1, currentPage, currentPage + 1, 0];
  }
};
