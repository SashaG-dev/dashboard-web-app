import {
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { FormRowStyled } from '../../components/Form';
import { LabelTop } from '../../components/Label';
import { TextInputStyled } from '../../components/Input';
import { ButtonGroupStyled, ButtonStyled } from '../../components/Button';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { errorToast } from '../../utils/toasts';
import { updateCurrentName } from '../../store/slices/userSlice';
import { MAX_NAME_LENGTH } from '../../utils/constants';

type Props = {
  onClick: () => void;
  setChangeDisplay: Dispatch<SetStateAction<boolean>>;
};

const UpdateName = ({ onClick, setChangeDisplay }: Props) => {
  const [userInput, setUserInput] = useState('');

  const { displayName } = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (userInput.trim() === '') errorToast('Please enter a valid name');
    else if (userInput.length > MAX_NAME_LENGTH)
      errorToast('Name cannot be longer than 12 characters.');
    else if (userInput === displayName) errorToast('New name matches current');
    else {
      dispatch(updateCurrentName({ newName: userInput }));
      setChangeDisplay(false);
    }
  };

  return (
    <form className="settings-form">
      <h3 className="settings-h3">Update Name</h3>

      <div className="settings-container">
        <FormRowStyled>
          <LabelTop label="Name:" htmlFor="newName" isColumn={true}>
            <TextInputStyled
              id="newName"
              name="newName"
              value={userInput}
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

          <ButtonStyled $type="secondary" type="button" onClick={onClick}>
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ButtonGroupStyled>
    </form>
  );
};
export default UpdateName;
