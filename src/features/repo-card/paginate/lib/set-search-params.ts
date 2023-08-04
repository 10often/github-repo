import { ISearchParams, TDirection } from '../../../../entities/repo-card';

export const setSearchParams = (
  type: TDirection,
  start?: string,
  end?: string
): Omit<ISearchParams, 'search'> => {
  switch (type) {
    case 'prev':
      return {
        cursor: start || '',
        direction: type,
      };
    case 'next':
    default:
      return {
        cursor: end || '',
        direction: type,
      };
  }
};
