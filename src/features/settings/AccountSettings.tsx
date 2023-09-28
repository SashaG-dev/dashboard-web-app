import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import UpdatePassword from './UpdatePassword';
import UpdateEmail from './UpdateEmail';
import { ButtonStyled } from '../../components/Button';
import { FormRowStyled } from '../../components/Form';
import { useAppSelector } from '../../hooks/hooks';

const AccountSettings = () => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [changeDisplay, setChangeDisplay] = useState({
    email: false,
    password: false,
  });

  const { username, email, password } = useAppSelector(
    (state) => state.user.userData
  );

  const displayPassword = () => {
    if (password) {
      return togglePassword ? password : ''.padEnd(password.length, '*');
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
            username: <span>{username}</span>
          </p>
        </FormRowStyled>

        <FormRowStyled>
          <p>
            email address: <span>{email}</span>
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

            <ButtonStyled
              title={togglePassword ? 'Hide' : 'Show'}
              aria-label={togglePassword ? 'hide password' : 'show password'}
              onClick={() => setTogglePassword((prev) => !prev)}
              type="button"
              $type="icon"
            >
              {togglePassword ? (
                <BsEyeSlashFill aria-hidden="true" />
              ) : (
                <BsEyeFill aria-hidden="true" />
              )}
            </ButtonStyled>
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
