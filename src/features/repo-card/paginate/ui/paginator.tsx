import React, { useMemo } from 'react';
import cx from 'classnames';
import styles from './paginator.module.scss';
import { collapsePaginator } from '../lib/collapse-paginator';
import { setSearchParams } from '../lib/set-search-params';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared/lib/hooks/store.hooks';
import { PAGE_LIMIT } from '../../../../shared/lib/consts';
import { Button } from '../../../../shared/ui/button';
import { ArrowChevronRight } from '../../../../shared/ui/arrow-chevron-right';
import { ArrowChevronLeft } from '../../../../shared/ui/arrow-chevron-left';
import {
  ISearchParams,
  repoCardModel,
  TDirection,
} from '../../../../entities/repo-card';

export const Paginator = () => {
  const currentPage = useAppSelector(repoCardModel.selectPage);
  const pageInfo = useAppSelector(repoCardModel.selectPageInfo);
  const dispatch = useAppDispatch();

  const paginatorArray = useMemo(
    () =>
      collapsePaginator(
        currentPage,
        pageInfo?.hasPreviousPage,
        pageInfo?.hasNextPage
      ),
    [currentPage, pageInfo.hasNextPage, pageInfo.hasPreviousPage]
  );

  const handlePageChange = (type: TDirection) => () => {
    const searchParams: Omit<ISearchParams, 'search'> = setSearchParams(
      type,
      pageInfo?.startCursor,
      pageInfo?.endCursor
    );
    dispatch(repoCardModel.pageChange(searchParams));
  };

  return (
    paginatorArray.length > 1 && (
      <div
        id="paginator"
        data-cy-page={currentPage}
        className={styles.paginator}
      >
        <Button
          id="prev-button"
          size="sm"
          disabled={currentPage === 1}
          onCLick={handlePageChange('prev')}
        >
          <ArrowChevronLeft />
        </Button>
        <div id="page-list" className={styles.pages}>
          {paginatorArray.map((item: number, index: number) => {
            if (!item) {
              return <span key={`${index}+${item}`}>...</span>;
            }
            return (
              <div
                key={item}
                className={cx({ [styles.currentPage]: currentPage === item })}
              >
                <Button
                  id={item}
                  variant="text"
                  disabled={currentPage === item}
                  onCLick={handlePageChange(
                    item < currentPage ? 'prev' : 'next'
                  )}
                >
                  {item}
                </Button>
              </div>
            );
          })}
        </div>
        <Button
          id="next-button"
          size="sm"
          disabled={currentPage === PAGE_LIMIT || !pageInfo.hasNextPage}
          onCLick={handlePageChange('next')}
        >
          <ArrowChevronRight />
        </Button>
      </div>
    )
  );
};
