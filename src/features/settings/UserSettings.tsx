import { useState } from 'react';
import { FormRowStyled } from '../../components/Form';
import { ButtonStyled } from '../../components/Button';
import { useAppSelector } from '../../hooks/hooks';
import UpdateMode from './UpdateMode';
import UpdateName from './UpdateName';

const UserSettings = () => {
  const [changeDisplay, setChangeDisplay] = useState(false);

  const { userData } = useAppSelector((state) => state.user);

  return (
    <div>
      <h2 className="settings-heading">User settings</h2>
      <div className="settings-container">
        <FormRowStyled>
          <p>
            name: <span>{userData?.displayName || 'user'}</span>
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

        <FormRowStyled>
          <p>
            theme: <span>{userData.color}</span>
          </p>

          <div className="colors" role="listbox"></div>
        </FormRowStyled>

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
