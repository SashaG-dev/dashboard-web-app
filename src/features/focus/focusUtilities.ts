import { useState, useEffect, useRef, MouseEvent } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { HOUR, MINUTE, SECOND } from '../../utils/constants';

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

export const countdown = () => {
  const { currentTimer, status } = useAppSelector((state) => state.focus);

  let timeLeft =
    +currentTimer.hours * HOUR +
    +currentTimer.minutes * MINUTE +
    +currentTimer.seconds * SECOND;

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
    setNewTime(timeLeft);
  }, [currentTimer]);

  useEffect(() => {
    if (status === 'focusing') {
      timer.current = setInterval(() => {
        setNewTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      timer.current = null;
    };
  }, [status]);

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

  const displayedTime = convertSeconds(newTime);

  return { displayedTime };
};
