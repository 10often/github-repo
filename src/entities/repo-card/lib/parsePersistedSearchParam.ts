import { ISearchParams } from '../model/card';

type TPersistedSearchInfo = ISearchParams & { page: number };

const initParams: TPersistedSearchInfo = {
  direction: 'next',
  cursor: '',
  search: '',
  page: 1,
};

export const parsePersistedSearchInfo = (): TPersistedSearchInfo => {
  try {
    const persisted = localStorage.getItem('persist:root');
    const persistedCard: string = JSON.parse(persisted).card;
    return JSON.parse(persistedCard);
  } catch (e) {
    console.log(e);
    return initParams;
  }
};
