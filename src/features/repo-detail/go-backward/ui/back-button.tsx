import React from 'react';
import styles from './back-button.module.scss';
import { useBackButton } from '../lib/use-back-button';
import { Button } from '../../../../shared/ui/button';
import { ArrowLeft } from '../../../../shared/ui/arrow-left';

export const BackButton = () => {
  const { isPrevExist, back } = useBackButton();

  return (
    isPrevExist && (
      <div id="back-button" className={styles.backButton}>
        <Button variant="text" onCLick={back}>
          <ArrowLeft />
          <span>Back</span>
        </Button>
      </div>
    )
  );
};
