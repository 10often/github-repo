export interface IPageInfo {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ICard {
  id: string;
  name: string;
  stargazerCount: number;
  pushedAt: string;
  url: string;
  owner: IOwner;
}

interface IOwner {
  id: string;
  login: string;
}

export interface ISearchInfo {
  pageInfo: IPageInfo;
  totalCount: number;
  repositoryList: ICard[];
}

export interface ISearchByNameResponse {
  search: ISearchInfo;
}

export interface ISearchByCurrentUserResponse {
  viewer: ISearchByNameResponse;
}

export type TDirection = 'prev' | 'next';

export interface ISearchParams {
  direction: TDirection;
  cursor: string;
  search: string;
}
