import { useState, ChangeEvent } from 'react';
import { BsPlusLg, BsArrowLeft } from 'react-icons/bs';
import { useAppDispatch } from '../../../hooks/hooks';
import * as focusSlice from '../../../store/slices/focusSlice';
import FocusOptions from '../FocusOptions';
import { ButtonGroupStyled, ButtonStyled } from '../../../components/Button';
import { FocusEditingStyled } from './styles';

const FocusEditing = () => {
  const [focus, setFocus] = useState<focusSlice.TimerType>({
    hours: '0',
    minutes: '0',
    seconds: '0',
    name: '',
  });

  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFocus((prev) => ({ ...prev, [name]: value }));
  };

  const startTimer = () => {
    const { hours, minutes, seconds } = focus;
    if (hours + minutes + seconds !== '000') {
      dispatch(focusSlice.setCurrentTimer({ ...focus }));
      dispatch(focusSlice.startFocus());
    }
  };

  return (
    <div>
      <ButtonStyled
        onClick={() => dispatch(focusSlice.waitFocus())}
        title="return to home"
        $type="underline"
      >
        <BsArrowLeft aria-hidden="true" />
        Go Back
      </ButtonStyled>

      <FocusEditingStyled>
        <h1 className="focus-name">{focus.name || 'Unnamed Session'}</h1>
        <h2 className="focus-display">
          {focus.hours}:{focus.minutes.padStart(2, '0')}:
          {focus.seconds.padStart(2, '0')}
        </h2>

        <FocusOptions focus={focus} onChange={onChange} />

        <ButtonGroupStyled className="edit-buttons">
          <ButtonStyled
            $type="secondary"
            title="Save this timer for later user"
            aria-label="save this timer for later use"
          >
            <BsPlusLg aria-hidden="true" />
            Save this timer
          </ButtonStyled>

          <ButtonStyled
            $type="accent"
            title="Start timer"
            aria-label="start timer"
            onClick={startTimer}
          >
            Start now
          </ButtonStyled>
        </ButtonGroupStyled>
      </FocusEditingStyled>
    </div>
  );
};
export default FocusEditing;
