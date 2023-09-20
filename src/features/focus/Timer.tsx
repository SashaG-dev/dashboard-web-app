import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setTimeLeft } from '../../store/slices/focusSlice';
import { countdown } from './focusUtilities';

const Timer = () => {
  const { displayedTime } = countdown();
  const dispatch = useAppDispatch();

  const { timeLeft, status } = useAppSelector((state) => state.focus);

  useEffect(() => {
    dispatch(setTimeLeft({ timeLeft: displayedTime }));
  }, [displayedTime]);

  useEffect(() => {
    if (status === 'focusing' && timeLeft === '0:00') {
      console.log('Timer finished!');
    }
  }, [timeLeft]);

  return null;
};
export default Timer;
