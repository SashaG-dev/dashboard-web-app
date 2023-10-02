import { MouseEvent, KeyboardEvent } from 'react';
import { FormRowStyled } from '../../components/Form';
import Radio from '../../components/Radio/Radio';
import { updateUserTheme } from '../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const UpdateTheme = () => {
  const { darkMode, color } = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  const onChange = (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLElement;
    const { key } = e as KeyboardEvent;
    const { type } = e as MouseEvent;

    if (key === 'Enter' || type == 'click') {
      const newColor = target.dataset.id;
      dispatch(updateUserTheme({ newColor }));
    }
  };

  return (
    <FormRowStyled>
      <p>theme:</p>
      <div className="radio-group" role="radiogroup">
        <Radio
          id="purple"
          name="theme"
          state={color}
          onChange={onChange}
          isDark={darkMode}
        />
        <Radio
          id="yellow"
          name="theme"
          state={color}
          onChange={onChange}
          isDark={darkMode}
        />
        <Radio
          id="red"
          name="theme"
          state={color}
          onChange={onChange}
          isDark={darkMode}
        />
        <Radio
          id="green"
          name="theme"
          state={color}
          onChange={onChange}
          isDark={darkMode}
        />
        <Radio
          id="blue"
          name="theme"
          state={color}
          onChange={onChange}
          isDark={darkMode}
        />
      </div>
    </FormRowStyled>
  );
};
export default UpdateTheme;
