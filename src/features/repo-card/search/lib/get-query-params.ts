import { ISearchParams } from '../../../../entities/repo-card';

export const getQueryParams = ({
  search,
  cursor,
  direction,
}: ISearchParams) => {
  return {
    search,
    firstCursor: direction === 'prev' ? cursor : null,
    lastCursor: direction === 'next' ? cursor : null,
  };
};
