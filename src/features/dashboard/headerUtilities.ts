import { getToday } from '../../utils/helpers';

export const getUserGreeting = (
  name?: string,
  downTime?: string
): string | undefined => {
  //This will only show if the user is logged in.
  if (downTime) return `Good night, ${name}.`;

  const hour = getToday().getHours();

  if (hour >= 5 && hour < 12) {
    return name ? `Good morning, ${name}.` : `Good morning.`;
  }
  if (hour >= 12 && hour < 17) {
    return name ? `Good afternoon, ${name}.` : `Good afternoon.`;
  }
  if (hour >= 17 || hour < 5) {
    return name ? `Good evening, ${name}.` : `Good evening.`;
  }
};

export const getDate = (): string => {
  // TODO: update this based on user settings
  const formattedDate = Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(getToday());

  return formattedDate;
};

export const getTime = (): string => {
  const formattedTime = Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
  }).format(getToday());

  return formattedTime;
};
