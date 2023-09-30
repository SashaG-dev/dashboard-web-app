import { useCallback } from 'react';
import Header from '../../components/Header/Header';
import { getUserGreeting } from './headerUtilities';
import { getDate } from '../../utils/helpers';
import { useAppSelector } from '../../hooks/hooks';

const DashboardHeader = () => {
  const { displayName } = useAppSelector((state) => state.user.userData);

  const displayUserGreeting = useCallback(() => {
    if (displayName) return getUserGreeting(displayName);
    else return getUserGreeting();
  }, []);

  return (
    <Header name="dashboard" heading={displayUserGreeting()}>
      <p className="header-date">{getDate()}</p>
    </Header>
  );
};
export default DashboardHeader;
