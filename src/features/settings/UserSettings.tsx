import { useState } from 'react';
import { FormRowStyled } from '../../components/Form';
import { ButtonStyled } from '../../components/Button';
import { useAppSelector } from '../../hooks/hooks';
import UpdateMode from './UpdateMode';
import UpdateTheme from './UpdateTheme';
import UpdateName from './UpdateName';
import UpdateAvatar from './UpdateAvatar';

const UserSettings = () => {
  const [changeDisplay, setChangeDisplay] = useState(false);

  const { userData } = useAppSelector((state) => state.user);

  return (
    <div>
      <h2 className="settings-heading">User settings</h2>
      <div className="settings-container">
        <UpdateAvatar />

        <FormRowStyled>
          <p>
            name: <span>{userData?.name || 'user'}</span>
          </p>
          <ButtonStyled
            $type="accent"
            disabled={changeDisplay}
            onClick={() => setChangeDisplay(true)}
          >
            update name
          </ButtonStyled>
        </FormRowStyled>

        <UpdateMode />

        <UpdateTheme />

        <div>
          {changeDisplay && (
            <UpdateName
              onClick={() => setChangeDisplay(false)}
              setChangeDisplay={setChangeDisplay}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default UserSettings;
