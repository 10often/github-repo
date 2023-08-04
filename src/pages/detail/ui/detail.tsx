import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detail.module.scss';
import { useAppDispatch } from '../../../shared/lib/hooks/store.hooks';
import { Loader } from '../../../shared/ui/loader';
import { repoDetailModel, RepoDetail } from '../../../entities/repo-detail';
import { useGetDetail } from '../../../features/repo-detail/get-detail';
import { BackButton } from '../../../features/repo-detail/go-backward';

export const Detail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    return () => dispatch(repoDetailModel.clearDetail());
  }, []);

  const { loading } = useGetDetail(id || '');

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <BackButton />
      <RepoDetail />
    </div>
  );
};
