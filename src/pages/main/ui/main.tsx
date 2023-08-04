import React from 'react';
import styles from './main.module.scss';
import { WidgetSearch } from '../../../widgets/search';
import { WidgetCardList } from '../../../widgets/card-list';
import { Header } from '../../../widgets/header';

export const Main = () => {
  return (
    <div className={styles.main}>
      <Header>
        <WidgetSearch />
      </Header>
      <WidgetCardList />
    </div>
  );
};
