import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSettings from '../AccountSettings';
import UserSettings from '../UserSettings';
import DeleteAccount from '../DeleteAccount';
import Modal from '../../../components/Modal/Modal';
import { focusModal } from '../../../hooks/focusModal';
import { deleteUserAccount } from '../../../api/apiAuth';
import { SettingsLayoutStyled } from './styles';

const SettingsLayout = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const openModal = () => setToggleModal(true);
  const close = () => setToggleModal(false);

  const onClick = () => {
    deleteUserAccount();
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  const { modalRef } = focusModal({ toggleModal, setToggleModal, onClick });

  return (
    <SettingsLayoutStyled>
      {toggleModal && (
        <Modal
          role="alertdialog"
          heading="Your account will be deleted."
          subheading="Click 'Delete Account' to confirm."
          close={close}
          btnText="Delete Account"
          onClick={onClick}
          ref={modalRef}
        />
      )}
      <AccountSettings />
      <UserSettings />
      <DeleteAccount onClick={openModal} />
    </SettingsLayoutStyled>
  );
};
export default SettingsLayout;
