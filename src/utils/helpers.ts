export const getToday = (): Date => {
  const today = new Date();
  return today;
};

export const formatDate = (date: Date, locale: string = 'en-US'): string => {
  const formattedDate = Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
  }).format(date);

  return formattedDate;
};
