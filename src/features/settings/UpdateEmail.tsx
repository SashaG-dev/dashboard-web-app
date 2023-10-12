import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { FormRowStyled } from '../../components/Form';
import { LabelTop } from '../../components/Label';
import { TextInputStyled } from '../../components/Input';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';
import { updateCurrentEmail } from '../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { checkEmailError } from './settingsUtilities';
import { iconToast } from '../../utils/toasts';

type Props = {
  onClick: (name: 'email' | 'password') => void;
};

const UpdateEmail = ({ onClick }: Props) => {
  const [userInput, setUserInput] = useState({
    newEmail: '',
    password: '',
  });

  const { email, password, displayName } = useAppSelector(
    (state) => state.user.userData
  );
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handler = () => {
    dispatch(updateCurrentEmail({ newEmail: userInput.newEmail }));
    onClick('email');
  };

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (displayName !== 'demo.user') {
      if (email && password) {
        checkEmailError(userInput, email, password, handler);
      }
    } else iconToast('Cannot change email in demo mode.', '⚙️');
  };

  return (
    <form className="settings-form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="settings-h3">Update Email</h3>

      <div className="form-container">
        <FormRowStyled>
          <LabelTop label="New email:" htmlFor="newEmail" isColumn={true}>
            <TextInputStyled
              id="newEmail"
              name="newEmail"
              value={userInput.newEmail}
              onChange={(e) => onChange(e)}
            />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop label="Password:" htmlFor="password" isColumn={true}>
            <TextInputStyled
              id="password"
              name="password"
              value={userInput.password}
              onChange={(e) => onChange(e)}
              type="password"
            />
          </LabelTop>
        </FormRowStyled>
      </div>

      <ButtonGroupStyled>
        <ButtonGroupStyled>
          <ButtonStyled
            $type="accent"
            title="Confirm change"
            onClick={(e) => handleSubmit(e)}
          >
            Confirm
          </ButtonStyled>

          <ButtonStyled
            $type="secondary"
            type="button"
            onClick={() => onClick('email')}
          >
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ButtonGroupStyled>
    </form>
  );
};
export default UpdateEmail;
