import { useState, useEffect, useRef, MouseEvent } from 'react';
import { HOUR, MINUTE, SECOND } from '../../utils/constants';
import { TimerType } from '../../store/slices/focusSlice';

const convertSeconds = (s: number) => {
  let hour = Math.floor(s / HOUR);
  let min = Math.floor(s / MINUTE);
  let sec = s % 60;

  if (min >= 60) {
    min = min - MINUTE * hour;
  }
  if (!hour) {
    return `${min}` + ':' + `${sec}`.padStart(2, '0');
  }

  return (
    hour + ':' + `${min}`.padStart(2, '0') + ':' + `${sec}`.padStart(2, '0')
  );
};

export const countdown = (data: Omit<TimerType, 'name'>) => {
  let timeLeft =
    +data.hours * HOUR + +data.minutes * MINUTE + +data.seconds * SECOND;

  const timer = useRef<NodeJS.Timeout | null>(null);

  const [newTime, setNewTime] = useState(timeLeft);

  const pauseTimer = (e: MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')!.classList.contains('pause')) {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }
  };

  const playTimer = (e: MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('button')!.classList.contains('play') &&
      !timer.current
    ) {
      timer.current = setInterval(() => {
        setNewTime((prev) => prev - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setNewTime((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      timer.current = null;
    };
  }, []);

  useEffect(() => {
    const playBtn = document.querySelector('.play') as HTMLButtonElement;
    const pauseBtn = document.querySelector('.pause') as HTMLButtonElement;

    if (playBtn)
      playBtn.addEventListener('click', (e: any) => {
        playTimer(e);
      });
    if (pauseBtn)
      pauseBtn.addEventListener('click', (e: any) => {
        pauseTimer(e);
      });

    return () => {
      if (playBtn)
        playBtn.removeEventListener('click', (e: any) => {
          playTimer(e);
        });
      if (pauseBtn)
        pauseBtn.removeEventListener('click', (e: any) => {
          pauseTimer(e);
        });
    };
  });

  useEffect(() => {
    if (newTime < 1) {
      clearInterval(timer.current!);
    }
  }, [newTime]);

  return convertSeconds(newTime);
};
