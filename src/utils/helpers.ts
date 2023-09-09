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
