import { useCallback } from 'react';
import Header from '../../components/Header/Header';
import { getUserGreeting } from './headerUtilities';
import { getDate } from '../../utils/helpers';
import { useAppSelector } from '../../hooks/hooks';

const DashboardHeader = () => {
  const { name } = useAppSelector((state) => state.user.userData);

  const displayUserGreeting = useCallback(() => {
    if (name) return getUserGreeting(name);
    else return getUserGreeting();
  }, [name]);

  return (
    <Header name="dashboard" heading={displayUserGreeting()}>
      <p className="header-date">{getDate()}</p>
    </Header>
  );
};
export default DashboardHeader;
