import { Outlet } from 'react-router-dom';
import { BsBoxArrowRight } from 'react-icons/bs';
import UserMenuDetails from '../UserMenuDetails/UserMenuDetails';
import UserMenuNav from '../UserMenuNav/UserMenuNav';
import { UserMenuStyled } from './styles';
import { useAppSelector } from '../../../hooks/hooks';
import { account } from '../../../data/account';

const UserMenu = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <>
      <UserMenuStyled className={isOpen ? '' : 'closed'}>
        <UserMenuDetails {...account} />
        <UserMenuNav />
        <div className="settings-container">
          <button type="button" title="Logout" aria-label="logout of account">
            <BsBoxArrowRight aria-hidden="true" />
            <span>Logout</span>
          </button>
        </div>
      </UserMenuStyled>
      <Outlet />
    </>
  );
};
export default UserMenu;
