import { useEffect } from 'react';
import * as userSlice from '../store/slices/userSlice';
import * as statSlice from '../store/slices/statsSlice';
import * as focusSlice from '../store/slices/focusSlice';
import { useAppDispatch } from '../hooks/hooks';
import DashboardLayout from '../features/dashboard/DashboardLayout/DashboardLayout';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userSlice.fetchUserData());
    dispatch(statSlice.fetchUserStats());
    dispatch(focusSlice.fetchFocusData());

    return () => {
      dispatch(userSlice.unsubscribe());
      dispatch(statSlice.unsubscribe());
      dispatch(focusSlice.unsubscribe());
    };
  }, [dispatch]);

  return (
    <main>
      <DashboardLayout />
    </main>
  );
};
export default Home;
