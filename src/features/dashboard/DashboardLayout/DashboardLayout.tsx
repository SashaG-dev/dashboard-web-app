import { useAppSelector } from '../../../hooks/hooks';
import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import DashboardNote from '../DashboardNote/DashboardNote';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

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
