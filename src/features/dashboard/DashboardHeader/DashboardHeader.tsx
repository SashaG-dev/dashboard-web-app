import { useCallback } from 'react';
import { getUserGreeting } from '../headerUtilities';
import { DashboardHeaderStyled } from './styles';
import { getTime } from '../../../hooks/getTime';
import { getDate } from '../../../utils/helpers';
import { account } from '../../../data/account';

const DashboardHeader = () => {
  const { time } = getTime();

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
        <p className="header-time">{time}</p>
      </div>
    </DashboardHeaderStyled>
  );
};
export default DashboardHeader;
