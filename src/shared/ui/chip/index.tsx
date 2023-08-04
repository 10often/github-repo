import React from 'react';
import styles from './chip.module.scss';

interface IProps {
  value: string;
  color?: string;
}
export const Chip = ({ value, color = 'inherit' }: IProps) => {
  return (
    <div className={styles.chip} style={{ background: color }}>
      {value}
    </div>
  );
};
