import {
  ISearchByNameResponse,
  ISearchByCurrentUserResponse,
  ISearchInfo,
} from '../model/card';

export const mapCard = (
  card: ISearchByNameResponse | ISearchByCurrentUserResponse
): ISearchInfo => {
  if ('viewer' in card) {
    return {
      ...card.viewer.search,
    };
  }

  return {
    ...card.search,
  };
};
