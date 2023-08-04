import React, { useState } from 'react';
import { useDebounce } from '../../../shared/lib/hooks/use-debounce.hook';
import { useAppDispatch } from '../../../shared/lib/hooks/store.hooks';
import { Input } from '../../../shared/ui/input';
import {
  repoCardModel,
  parsePersistedSearchInfo,
} from '../../../entities/repo-card';

export const Search = () => {
  const [value, setValue] = useState<string>(() => {
    const { search } = parsePersistedSearchInfo();
    return search;
  });
  const dispatch = useAppDispatch();

  const changeSearchDebounce = useDebounce((value: string) => {
    dispatch(repoCardModel.searchChange(value));
    dispatch(repoCardModel.pageClear());
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeSearchDebounce(e.target.value);
  };

  return <Input type="text" value={value} onChange={handleInputChange} />;
};
