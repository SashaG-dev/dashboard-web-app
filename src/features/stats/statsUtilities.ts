import { HOUR, MINUTE, DAY } from '../../utils/constants';

export const displayTotalDays = (s: number): number => {
  const days = Math.floor(s / DAY);
  return days;
};

export const displayTotalHours = (s: number): number => {
  const hours = Math.floor(s / HOUR);
  return hours;
};

export const displayTotalMinutes = (s: number): number => {
  const minutes = Math.floor(s / MINUTE);
  return minutes;
};
