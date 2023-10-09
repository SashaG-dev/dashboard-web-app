import { useState } from 'react';
import UpdatePassword from './UpdatePassword';
import UpdateEmail from './UpdateEmail';
import { ButtonStyled } from '../../components/Button';
import { FormRowStyled } from '../../components/Form';
import { useAppSelector } from '../../hooks/hooks';

const AccountSettings = () => {
  const [changeDisplay, setChangeDisplay] = useState({
    email: false,
    password: false,
  });

  const { userData } = useAppSelector((state) => state.user);

  const displayEmail = () => {
    if (userData.email) {
      const main = userData.email.split('@');
      return main[0][0].padEnd(main[0].length, '*') + '@' + main[1];
    }
  };
  const displayPassword = () => {
    if (userData.password) {
      return ''.padEnd(userData.password.length, '*');
    }
  };

  const openDisplay = (name: keyof typeof changeDisplay) => {
    if (name === 'email') {
      setChangeDisplay({ password: false, email: true });
    } else setChangeDisplay({ password: true, email: false });
  };
  const close = (name: keyof typeof changeDisplay) => {
    setChangeDisplay((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <div>
      <h2 className="settings-heading">Account settings</h2>
      <div className="settings-container">
        <FormRowStyled>
          <p>
            email address: <span>{displayEmail()}</span>
          </p>
          <ButtonStyled
            type="button"
            $type="accent"
            onClick={() => openDisplay('email')}
            disabled={changeDisplay.email}
          >
            update email
          </ButtonStyled>
        </FormRowStyled>

        <FormRowStyled>
          <div className="password">
            <p>
              password: <span>{displayPassword()}</span>
            </p>
          </div>

          <ButtonStyled
            type="button"
            $type="accent"
            onClick={() => openDisplay('password')}
            disabled={changeDisplay.password}
          >
            update password
          </ButtonStyled>
        </FormRowStyled>

        <div>
          {changeDisplay.email && <UpdateEmail onClick={close} />}
          {changeDisplay.password && <UpdatePassword onClick={close} />}
        </div>
      </div>
    </div>
  );
};
export default AccountSettings;
