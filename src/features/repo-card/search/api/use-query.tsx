import { useQuery } from '@apollo/client';
import { GET_REPO_BY_NAME, GET_REPO_OF_CURRENT_USER } from './search';
import { getQueryParams } from '../lib/get-query-params';
import { PAGE_ITEM_LIMIT } from '../../../../shared/lib/consts';
import { useAppDispatch } from '../../../../shared/lib/hooks/store.hooks';
import {
  repoCardModel,
  mapCard,
  ISearchByNameResponse,
  ISearchByCurrentUserResponse,
  ISearchParams,
} from '../../../../entities/repo-card';

export const useSearchByName = (
  search = '',
  firstCursor: string | null,
  lastCursor: string | null
) => {
  const dispatch = useAppDispatch();

  return useQuery<ISearchByNameResponse>(GET_REPO_BY_NAME, {
    variables: {
      queryString: search,
      first: lastCursor || !firstCursor ? PAGE_ITEM_LIMIT : null,
      afterCursor: lastCursor || null,
      last: firstCursor ? PAGE_ITEM_LIMIT : null,
      beforeCursor: firstCursor || null,
    },
    skip: !search,
    onCompleted: (data: ISearchByNameResponse) => {
      dispatch(repoCardModel.getRepoCardList(mapCard(data)));
    },
  });
};

export const useSearchByCurrentUser = (
  search = '',
  firstCursor: string | null,
  lastCursor: string | null
) => {
  const dispatch = useAppDispatch();

  return useQuery<ISearchByCurrentUserResponse>(GET_REPO_OF_CURRENT_USER, {
    variables: {
      first: lastCursor || !firstCursor ? PAGE_ITEM_LIMIT : null,
      afterCursor: lastCursor || null,
      last: firstCursor ? PAGE_ITEM_LIMIT : null,
      beforeCursor: firstCursor || null,
    },
    skip: !!search,
    onCompleted: (data: ISearchByCurrentUserResponse) => {
      dispatch(repoCardModel.getRepoCardList(mapCard(data)));
    },
  });
};

export const useSearchRepos = (queryParams: ISearchParams) => {
  const { search, firstCursor, lastCursor } = getQueryParams(queryParams);
  const { loading: searchByNameLoading } = useSearchByName(
    search,
    firstCursor,
    lastCursor
  );
  const { loading: searchByUserLoading } = useSearchByCurrentUser(
    search,
    firstCursor,
    lastCursor
  );

  return {
    loading: searchByNameLoading || searchByUserLoading,
  };
};
