import { useState, useEffect, useRef, MouseEvent } from 'react';
import { addTotalFocus } from '../store/slices/statsSlice';
import { useAppSelector, useAppDispatch } from './hooks';
import { convertSeconds } from '../features/focus/focusUtilities';
import { HOUR, MINUTE, SECOND } from '../utils/constants';
import { iconToast } from '../utils/toasts';

export const countdown = (pathname: string) => {
  const { currentTimer, status } = useAppSelector((state) => state.focus);
  const dispatch = useAppDispatch();

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
    if (newTime > 1 && status === 'waiting') {
      const timeFocused = timeLeft - newTime;
      dispatch(addTotalFocus({ time: timeFocused }));
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
      dispatch(addTotalFocus({ time: timeLeft }));
      pathname !== '/focus' ? iconToast('Your timer has ended!', '⌛') : null;
    }
  }, [newTime]);

  const displayedTime = convertSeconds(newTime);

  return { displayedTime, newTime };
};
