import React from 'react';
import styles from './input.module.scss';

interface IProps {
  type: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export const Input = ({ type = 'text', value, onChange }: IProps) => {
  return (
    <input
      className={styles.input}
      placeholder="Search..."
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
