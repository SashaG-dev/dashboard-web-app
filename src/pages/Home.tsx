import { useCallback } from 'react';
import { getUserGreeting } from '../features/dashboard/userGreeting';
import { account } from '../data/account';

const Home = () => {
  const displayUserGreeting = useCallback(() => {
    return getUserGreeting(account.details.firstName);
  }, []);

  return (
    <main>
      <h1>{displayUserGreeting()}</h1>
    </main>
  );
};
export default Home;
