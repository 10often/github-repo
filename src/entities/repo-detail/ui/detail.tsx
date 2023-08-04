import React from 'react';
import cx from 'classnames';
import styles from './detail.module.scss';
import { formattedDate } from '../../../shared/lib/date';
import { useAppSelector } from '../../../shared/lib/hooks/store.hooks';
import { ExternalLink } from '../../../shared/ui/external-link';
import { Star } from '../../../shared/ui/star';
import { Chip } from '../../../shared/ui/chip';
import { repoDetailModel } from '../../../entities/repo-detail';

export const Detail = () => {
  const detail = useAppSelector(repoDetailModel.selectRepoDetail);

  return detail ? (
    <div id={`repo-${detail.id}`} className={styles.detail}>
      <div className={styles.header}>
        <h1 className={styles.title}>{detail.name}</h1>
        <a
          className={styles.link}
          target="_blank"
          href={detail.url}
          rel="noreferrer"
        >
          <span>GitHub Link</span>
          <ExternalLink />
        </a>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.star}>
          <Star />
          <span>{detail.stargazerCount}</span>
        </div>
        <span>·</span>
        <div>{`Updated on ${formattedDate(detail.pushedAt)}`}</div>
      </div>
      <div className={cx(styles.owner, styles.row)}>
        {detail.owner.avatarUrl && (
          <img src={detail.owner.avatarUrl} alt="owner avatar" />
        )}
        <a
          className={styles.link}
          target="_blank"
          href={detail.owner.url}
          rel="noreferrer"
        >
          <h4>{detail.owner.login}</h4>
        </a>
      </div>
      {detail.shortDescription && (
        <div className={styles.row}>
          <h3>About</h3>
          <div dangerouslySetInnerHTML={{ __html: detail.shortDescription }} />
        </div>
      )}
      {detail.languages && (
        <div className={cx(styles.languages, styles.row)}>
          {detail.languages.map((lang) => (
            <Chip key={lang} value={lang} color="#81BAB4" />
          ))}
        </div>
      )}
    </div>
  ) : (
    <span>Not Found</span>
  );
};
