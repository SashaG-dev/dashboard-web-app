import { useState } from 'react';
import AccountSettings from '../AccountSettings';
import UserSettings from '../UserSettings';
import DeleteAccount from '../DeleteAccount';
import { ButtonStyled } from '../../../components/Button';
import { useAppSelector } from '../../../hooks/hooks';
import { SettingsLayoutStyled } from './styles';
import { iconToast } from '../../../utils/toasts';
import placeholder from '../../../assets/placeholder.jpg';
import avatar1 from '../../../../public/avatars/avatar1.jpg';
import avatar2 from '../../../../public/avatars/avatar2.jpg';
import avatar3 from '../../../../public/avatars/avatar3.jpg';
import avatar4 from '../../../../public/avatars/avatar4.jpg';
import avatar5 from '../../../../public/avatars/avatar5.jpg';

const SettingsLayout = () => {
  const { photoURL, displayName, name } = useAppSelector(
    (state) => state.user.userData
  );

  const [display, setDisplay] = useState<boolean>(false);

  const showDisplay = () => {
    setDisplay(true);
    if (displayName === 'demo.user')
      iconToast('This account cannot be deleted in demo mode.', '⚙️');
  };
  const hideDisplay = () => setDisplay(false);

  const displayAvatar = () => {
    return [avatar1, avatar2, avatar3, avatar4, avatar5].find((avatar) =>
      avatar.includes(photoURL!)
    );
  };

  return (
    <SettingsLayoutStyled>
      <div className="user-details">
        <img
          src={photoURL ? displayAvatar() : placeholder}
          alt="user avatar"
          className="user-img"
        />

        <div className="details-text">
          <h2 className="user-name">{name}</h2>
          <p className="user-display">{displayName}</p>
        </div>
      </div>

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
