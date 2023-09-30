import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserMenuDetails from '../UserMenuDetails/UserMenuDetails';
import UserMenuNav from '../UserMenuNav/UserMenuNav';
import UserMenuLogout from '../UserMenuLogout';
import Modal from '../../../components/Modal/Modal';
import { focusModal } from '../../../hooks/focusModal';
import { useAppSelector } from '../../../hooks/hooks';
import { signOutUser } from '../../../api/apiAuth';
import { UserMenuStyled } from './styles';

const UserMenu = () => {
  const { isOpen } = useAppSelector((state) => state.menu);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const onClick = () => {
    signOutUser();
    navigate('/login');
    localStorage.removeItem('token');
  };

  const close = () => setToggleModal(false);

  const { modalRef } = focusModal({ toggleModal, setToggleModal, onClick });

  return (
    <>
      {toggleModal && (
        <Modal
          role="alertdialog"
          heading="Are you sure you want to log out?"
          ref={modalRef}
          onClick={onClick}
          close={close}
          btnText="Log out"
        />
      )}
      <UserMenuStyled className={isOpen ? '' : 'closed'}>
        <UserMenuDetails />
        <UserMenuNav />
        <UserMenuLogout setToggleModal={setToggleModal} />
      </UserMenuStyled>
      <Outlet />
    </>
  );
};
export default UserMenu;
