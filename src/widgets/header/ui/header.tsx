import React, { FC } from 'react';
import styles from './header.module.scss';

export const Header: FC = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
