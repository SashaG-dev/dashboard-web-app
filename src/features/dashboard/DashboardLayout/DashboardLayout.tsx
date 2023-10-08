import { useEffect } from 'react';
import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import DashboardNote from '../DashboardNote/DashboardNote';
import DashboardStats from '../DashboardStats/DashboardStats';
import * as userSlice from '../../../store/slices/userSlice';
import * as statSlice from '../../../store/slices/statsSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userSlice.fetchUserData());
    dispatch(statSlice.fetchUserStats());

    return () => {
      userSlice.unsubscribe();
      statSlice.unsubscribe();
    };
  }, [dispatch]);

  return (
    <DashboardLayoutStyled $isOpen={isOpen}>
      <DashboardHeader />
      <div className="dashboard-container">
        <DashboardTasks />
        <DashboardNote />
        <DashboardStats />
      </div>
    </DashboardLayoutStyled>
  );
};
export default DashboardLayout;
