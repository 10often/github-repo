import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card-list.module.scss';
import { useAppSelector } from '../../../shared/lib/hooks/store.hooks';
import { Loader } from '../../../shared/ui/loader';
import { repoCardModel, ICard, RepoCard } from '../../../entities/repo-card';
import { useSearchRepos } from '../../../features/repo-card/search';
import { RepoPaginator } from '../../../features/repo-card/paginate';

export const CardList = () => {
  const cursor = useAppSelector(repoCardModel.selectCursor);
  const direction = useAppSelector(repoCardModel.selectDirection);
  const search = useAppSelector(repoCardModel.selectSearch);
  const repoCardList = useAppSelector(repoCardModel.selectRepoCardList);
  const count = useAppSelector(repoCardModel.selectCount);

  const navigate = useNavigate();

  const { loading } = useSearchRepos({ search, cursor, direction });

  const handleCardClick = (to: string) => () => {
    navigate(to);
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      <div id="cards" data-cy-count={count} className={styles.list}>
        {repoCardList.map((item: ICard) => (
          <RepoCard
            key={item.id}
            card={item}
            handleCardClick={handleCardClick(item.id)}
          />
        ))}
      </div>
      <RepoPaginator />
    </div>
  );
};
