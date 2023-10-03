import { useState } from 'react';
import AccountSettings from '../AccountSettings';
import UserSettings from '../UserSettings';
import DeleteAccount from '../DeleteAccount';
import { ButtonStyled } from '../../../components/Button';
import { SettingsLayoutStyled } from './styles';

const SettingsLayout = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const showDisplay = () => setDisplay(true);
  const hideDisplay = () => setDisplay(false);

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
