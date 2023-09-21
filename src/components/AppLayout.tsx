import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Timer from './Timer';

const AppLayout = () => {
  return (
    <div>
      <Timer />
      <Outlet />
      <Toaster />
    </div>
  );
};
export default AppLayout;
