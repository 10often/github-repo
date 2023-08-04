import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import { repoCardModel } from '../entities/repo-card';
import { repoDetailModel } from '../entities/repo-detail';

const rootReducer = combineReducers({
  card: repoCardModel.repoCardReducer,
  detail: repoDetailModel.repoDetailReducer,
});

const saveSearchParams = createWhitelistFilter('card', [
  'search',
  'cursor',
  'direction',
  'page',
]);

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['card'],
  transforms: [saveSearchParams],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
