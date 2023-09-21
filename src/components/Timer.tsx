import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { setTimeLeft } from '../store/slices/focusSlice';
import { countdown } from '../hooks/countdown';

const Timer = () => {
  const { pathname } = useLocation();

  const { displayedTime } = countdown(pathname);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTimeLeft({ timeLeft: displayedTime }));
  }, [displayedTime]);

  return null;
};
export default Timer;
