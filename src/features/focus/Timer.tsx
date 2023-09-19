import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setTimeLeft } from '../../store/slices/focusSlice';
import { countdown } from './focusUtilities';

const Timer = () => {
  const { displayedTime } = countdown();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTimeLeft({ timeLeft: displayedTime }));
  });

  return null;
};
export default Timer;
