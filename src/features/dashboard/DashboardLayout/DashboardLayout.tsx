import { useEffect } from 'react';
import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import DashboardNote from '../DashboardNote/DashboardNote';
import { fetchUserData, unsubscribe } from '../../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <DashboardLayoutStyled $isOpen={isOpen}>
      <DashboardHeader />
      <div className="dashboard-container">
        <DashboardTasks />
        <DashboardNote />
      </div>
    </DashboardLayoutStyled>
  );
};
export default DashboardLayout;
