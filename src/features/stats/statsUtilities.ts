import { HOUR } from '../../utils/constants';

export const displayTotalHours = (s: number): string => {
  const hours = Math.floor(s / HOUR);
  return hours.toString();
};
