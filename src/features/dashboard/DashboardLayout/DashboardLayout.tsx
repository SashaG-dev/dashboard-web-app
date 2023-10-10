import { useEffect } from 'react';
import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import DashboardNote from '../DashboardNote/DashboardNote';
import DashboardStats from '../DashboardStats/DashboardStats';
import DashboardFocus from '../DashboardFocus/DashboardFocus';
import * as userSlice from '../../../store/slices/userSlice';
import * as statSlice from '../../../store/slices/statsSlice';
import * as focusSlice from '../../../store/slices/focusSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

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
    <DashboardLayoutStyled $isOpen={isOpen}>
      <DashboardHeader />
      <div className="dashboard-container">
        <DashboardTasks />
        <DashboardNote />
        <DashboardStats />
        <DashboardFocus />
      </div>
    </DashboardLayoutStyled>
  );
};
export default DashboardLayout;
