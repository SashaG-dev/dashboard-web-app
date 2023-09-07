import { useCallback } from 'react';
import { getUserGreeting, getDate } from '../headerUtilities';
import { DashboardHeaderStyled } from './styles';
import DashboardTime from '../DashboardTime';
import { account } from '../../../data/account';

const DashboardHeader = () => {
  const displayUserGreeting = useCallback(() => {
    return getUserGreeting(account.details.firstName);
  }, []);

  return (
    <DashboardHeaderStyled aria-label="dashboard header">
      <div>
        <h1 className="header-heading">{displayUserGreeting()}</h1>
      </div>

      <div className="header-details">
        <p className="header-date">{getDate()}</p>
        <DashboardTime />
      </div>
    </DashboardHeaderStyled>
  );
};
export default DashboardHeader;
