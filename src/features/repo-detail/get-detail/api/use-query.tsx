import { useQuery } from '@apollo/client';
import { GET_DETAIL_INFO } from './get-detail-info';
import { useAppDispatch } from '../../../../shared/lib/hooks/store.hooks';
import {
  repoDetailModel,
  mapDetail,
  IDetailResponse,
} from '../../../../entities/repo-detail';

export const useGetDetail = (id: string) => {
  const dispatch = useAppDispatch();

  return useQuery<IDetailResponse>(GET_DETAIL_INFO, {
    variables: {
      id,
    },
    onCompleted: (data: IDetailResponse) => {
      dispatch(repoDetailModel.getDetail(mapDetail(data)));
    },
  });
};
