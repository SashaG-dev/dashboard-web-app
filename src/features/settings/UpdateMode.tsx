import { ChangeEvent, KeyboardEvent } from 'react';
import { FormRowStyled } from '../../components/Form';
import CheckboxSlider from '../../components/CheckboxSlider/CheckboxSlider';
import { toggleUserMode } from '../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const UpdateMode = () => {
  const { darkMode } = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  const onChange = (
    e: ChangeEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => {
    const keyboardEvent = e as KeyboardEvent;
    const { type } = e as ChangeEvent;
    if (keyboardEvent.key === 'Enter' || type === 'change')
      dispatch(toggleUserMode());
  };

  return (
    <FormRowStyled>
      <p>
        Mode: <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </p>

      <CheckboxSlider
        id="mode"
        checked={darkMode}
        label={darkMode ? 'switch to light mode' : 'switch to dark mode'}
        onChange={(e: any) => onChange(e)}
      />
    </FormRowStyled>
  );
};
export default UpdateMode;
