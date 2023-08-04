import React, { FC } from 'react';
import cx from 'classnames';
import styles from './button.module.scss';

interface IProps {
  size?: 'sm' | 'md';
  variant?: 'outlined' | 'text';
  disabled?: boolean;
  onCLick(): void;
}
export const Button: FC<IProps> = ({
  size = 'md',
  variant = 'outlined',
  disabled = false,
  onCLick,
  children,
}) => {
  return (
    <button
      className={cx(
        styles.button,
        { [styles.sm]: size === 'sm' },
        { [styles.text]: variant === 'text' }
      )}
      disabled={disabled}
      onClick={onCLick}
    >
      {children}
    </button>
  );
};
