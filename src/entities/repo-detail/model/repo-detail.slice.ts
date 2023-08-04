import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetail } from './detail';
import { RootState } from '../../../app/store';

interface IRepoDetailSlice {
  repository: IDetail | null;
}

const initialState: IRepoDetailSlice = {
  repository: null,
};

export const repoDetailSlice = createSlice({
  name: '@@detail',
  initialState,
  reducers: {
    getDetail: (
      state: IRepoDetailSlice,
      action: PayloadAction<IDetail | null>
    ) => {
      state.repository = action.payload;
    },
    clearDetail: (state: IRepoDetailSlice, _) => initialState,
  },
});

export const { getDetail, clearDetail } = repoDetailSlice.actions;

export const selectRepoDetail = (state: RootState) => state.detail.repository;

export const repoDetailReducer = repoDetailSlice.reducer;
