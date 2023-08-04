import { useRef, useCallback } from 'react';

export const useDebounce = <Cb extends (...args: any[]) => void>(
  func: Cb,
  wait: number
): Cb => {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  ) as Cb;
};
