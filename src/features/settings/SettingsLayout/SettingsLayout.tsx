import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSettings from '../AccountSettings';
import UserSettings from '../UserSettings';
import DeleteAccount from '../DeleteAccount';
import { ButtonStyled } from '../../../components/Button';
import { deleteUserAccount } from '../../../api/apiAuth';
import { SettingsLayoutStyled } from './styles';

const SettingsLayout = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const navigate = useNavigate();

  const showDisplay = () => setDisplay(true);
  const hideDisplay = () => setDisplay(false);

  const onClick = () => {
    deleteUserAccount();
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <SettingsLayoutStyled>
      <AccountSettings />
      <UserSettings />

      {!display && (
        <div className="delete-container">
          <ButtonStyled $type="warning" onClick={showDisplay}>
            Delete Account
          </ButtonStyled>
        </div>
      )}

      {display && (
        <div className="settings-container">
          <DeleteAccount close={hideDisplay} />
        </div>
      )}
    </SettingsLayoutStyled>
  );
};
export default SettingsLayout;
