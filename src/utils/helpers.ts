import { requestAuth } from '../api/apiAuth';

export const getToday = (): Date => {
  const today = new Date();
  return today;
};

export const formatDate = (
  date: Date,
  style: 'short' | 'full' | 'long' | 'medium' = 'short',
  locale: string = 'en-US'
): string => {
  const formattedDate = Intl.DateTimeFormat(locale, {
    dateStyle: style,
  }).format(date);

  return formattedDate;
};

export const getDate = (): string => {
  const formattedDate = formatDate(getToday(), 'full');
  return formattedDate;
};

export const getFullWeek = (): string => {
  const today = getToday();
  const weekMs = today.getTime() + 1000 * 60 * 60 * 24 * 6;
  const weekDate = new Date(weekMs);
  return `${formatDate(today)} - ${formatDate(weekDate)}`;
};

export const authLoader = async () => {
  await requestAuth();
  return null;
};
