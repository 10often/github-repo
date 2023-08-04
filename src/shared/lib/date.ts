import { format } from 'date-fns';

export const formattedDate = (value: string) => {
  const date = new Date(value);
  return format(date, 'd MMM yyy');
};
