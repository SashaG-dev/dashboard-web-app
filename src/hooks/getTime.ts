import { useState, useEffect } from 'react';
import { getToday } from '../utils/helpers';

export const getTime = () => {
  const currentTime = (): string => {
    const formattedTime = Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
    }).format(getToday());

    return formattedTime;
  };

  const [time, setTime] = useState<string>(currentTime());

  useEffect(() => {
    setInterval(() => {
      setTime(currentTime());
    }, 1000);
  }, []);

  return { currentTime, time };
};
