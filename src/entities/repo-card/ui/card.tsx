import React from 'react';
import styles from './card.module.scss';
import { ICard } from '../model/card';
import { formattedDate } from '../../../shared/lib/date';
import { Star } from '../../../shared/ui/star';
import { ExternalLink } from '../../../shared/ui/external-link';

interface IProps {
  card: ICard;
  handleCardClick(): void;
}

export const Card = ({ card, handleCardClick }: IProps) => {
  const linkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      id={`repo-${card.id}`}
      className={styles.card}
      onClick={handleCardClick}
      data-cy-owner-id={card.owner.id}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{card.name}</h2>
        <a
          onClick={linkClick}
          className={styles.link}
          target="_blank"
          href={card.url}
          rel="noreferrer"
        >
          <span>GitHub Link</span>
          <ExternalLink />
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.star}>
          <Star />
          <span>{card.stargazerCount}</span>
        </div>
        <span>·</span>
        <div>{`Updated on ${formattedDate(card.pushedAt)}`}</div>
      </div>
    </div>
  );
};
