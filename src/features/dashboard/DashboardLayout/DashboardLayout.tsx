import DashboardHeader from '../DashboardHeader';
import DashboardTasks from '../DashboardTasks/DashboardTasks';
import { DashboardLayoutStyled } from './styles';

const DashboardLayout = () => {
  return (
    <DashboardLayoutStyled>
      <DashboardHeader />
      <div className="dashboard-container">
        <DashboardTasks />
      </div>
    </DashboardLayoutStyled>
  );
};
export default DashboardLayout;
