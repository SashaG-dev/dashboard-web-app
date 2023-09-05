import { Outlet } from 'react-router-dom';
import { BsBoxArrowRight } from 'react-icons/bs';
import UserMenuDetails from '../UserMenuDetails/UserMenuDetails';
import UserMenuNav from '../UserMenuNav/UserMenuNav';
import { UserMenuStyled } from './styles';
import { useAppSelector } from '../../hooks/hooks';
import { account } from '../../data/account';

const UserMenu = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <>
      <UserMenuStyled className={isOpen ? '' : 'closed'}>
        <UserMenuDetails {...account} />
        <UserMenuNav />
        <div className="settings-container">
          {/* TODO: add light/dark mode toggle button */}
          {/* TODO: create styled component */}
          <button type="button" title="Logout" aria-label="Logout of account">
            <BsBoxArrowRight role="img" aria-label="logout" />
            <span>Logout</span>
          </button>
        </div>
      </UserMenuStyled>
      <Outlet />
    </>
  );
};
export default UserMenu;
