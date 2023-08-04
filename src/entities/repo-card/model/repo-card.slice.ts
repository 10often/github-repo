import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard, IPageInfo, ISearchInfo, ISearchParams } from './card';
import { RootState } from '../../../app/store';

interface IRepoCardSlice {
  cursor: string;
  direction: 'next' | 'prev';
  page: number;
  pageInfo: IPageInfo | null;
  repoCardList: ICard[];
  search: string;
  count: number;
}

const initialState: IRepoCardSlice = {
  cursor: '',
  direction: 'next',
  page: 1,
  pageInfo: null,
  repoCardList: [],
  search: '',
  count: 0,
};

export const repoCardSlice = createSlice({
  name: '@@card',
  initialState,
  reducers: {
    searchChange: (state: IRepoCardSlice, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    pageChange: (
      state: IRepoCardSlice,
      action: PayloadAction<Omit<ISearchParams, 'search'>>
    ) => {
      state.cursor = action.payload.cursor;
      state.direction = action.payload.direction;
      state.page =
        action.payload.direction === 'prev' ? state.page - 1 : state.page + 1;
    },
    pageClear: (state: IRepoCardSlice, _) => {
      state.cursor = '';
      state.direction = 'next';
      state.page = 1;
    },
    getRepoCardList: (
      state: IRepoCardSlice,
      action: PayloadAction<ISearchInfo>
    ) => {
      state.repoCardList = action.payload.repositoryList;
      state.pageInfo = action.payload.pageInfo;
      state.count = action.payload.totalCount;
    },
  },
});

export const { searchChange, pageChange, pageClear, getRepoCardList } =
  repoCardSlice.actions;

export const selectCursor = (state: RootState) => state.card.cursor;
export const selectDirection = (state: RootState) => state.card.direction;
export const selectPage = (state: RootState) => state.card.page;
export const selectPageInfo = (state: RootState) => state.card.pageInfo;
export const selectRepoCardList = (state: RootState) => state.card.repoCardList;
export const selectSearch = (state: RootState) => state.card.search;
export const selectCount = (state: RootState) => state.card.count;

export const repoCardReducer = repoCardSlice.reducer;
