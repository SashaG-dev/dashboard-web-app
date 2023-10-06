import { useEffect } from 'react';
import { fetchUserStats, unsubscribe } from '../store/slices/statsSlice';
import { useAppDispatch } from '../hooks/hooks';
import StatsLayout from '../features/stats/StatsLayout/StatsLayout';

const More = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserStats());

    return () => {
      dispatch(unsubscribe());
    };
  }, [dispatch]);

  return (
    <main>
      <StatsLayout />
    </main>
  );
};
export default More;
