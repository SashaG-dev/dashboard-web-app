import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import DashboardNote from '../DashboardNote/DashboardNote';
import DashboardStats from '../DashboardStats/DashboardStats';
import DashboardFocus from '../DashboardFocus/DashboardFocus';
import { useAppSelector } from '../../../hooks/hooks';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

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
