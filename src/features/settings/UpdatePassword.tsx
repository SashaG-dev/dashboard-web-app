import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { FormRowStyled } from '../../components/Form';
import { LabelTop } from '../../components/Label';
import { TextInputStyled } from '../../components/Input';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';
import { updateCurrentPassword } from '../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { checkError } from './settingsUtilities';
import { iconToast } from '../../utils/toasts';

type Props = {
  onClick: (name: 'email' | 'password') => void;
};

const UpdatePassword = ({ onClick }: Props) => {
  const [userInput, setUserInput] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNew: '',
  });

  const { password, displayName } = useAppSelector(
    (state) => state.user.userData
  );
  const dispatch = useAppDispatch();

  const handler = () => {
    dispatch(updateCurrentPassword({ newPassword: userInput.newPassword }));
    onClick('password');
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (displayName !== 'demo.user') {
      if (password) checkError(userInput, password, handler);
    } else iconToast('Cannot change password in demo mode.', '⚙️');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="settings-form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="settings-h3">Update Password</h3>

      <div className="form-container">
        <FormRowStyled>
          <LabelTop
            label="Current password:"
            htmlFor="currentPassword"
            isColumn={true}
          >
            <TextInputStyled
              id="currentPassword"
              name="currentPassword"
              value={userInput.currentPassword}
              onChange={(e) => handleChange(e)}
              type="password"
            />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop label="New password:" htmlFor="newPassword" isColumn={true}>
            <TextInputStyled
              id="newPassword"
              name="newPassword"
              value={userInput.newPassword}
              onChange={(e) => handleChange(e)}
            />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop
            label="Confirm new password:"
            htmlFor="confirmNew"
            isColumn={true}
          >
            <TextInputStyled
              id="confirmNew"
              name="confirmNew"
              value={userInput.confirmNew}
              onChange={(e) => handleChange(e)}
            />
          </LabelTop>
        </FormRowStyled>
      </div>

      <ButtonGroupStyled>
        <ButtonGroupStyled>
          <ButtonStyled $type="accent" onClick={(e) => handleSubmit(e)}>
            Confirm
          </ButtonStyled>

          <ButtonStyled
            $type="secondary"
            type="button"
            onClick={() => onClick('password')}
          >
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ButtonGroupStyled>
    </form>
  );
};
export default UpdatePassword;
