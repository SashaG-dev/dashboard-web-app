import { useCallback } from 'react';
import Header from '../../components/Header/Header';
import { getUserGreeting } from './headerUtilities';
import { getDate } from '../../utils/helpers';
import { account } from '../../data/account';

const DashboardHeader = () => {
  const displayUserGreeting = useCallback(() => {
    return getUserGreeting(account.details.firstName);
  }, []);

  return (
    <Header name="dashboard" heading={displayUserGreeting()}>
      <p className="header-date">{getDate()}</p>
    </Header>
  );
};
export default DashboardHeader;
