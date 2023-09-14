import { useState, ChangeEvent } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useAppDispatch } from '../../../hooks/hooks';
import { setCurrentTimer, startFocus, TimerType } from '../focusSlice';
import Select from '../../../components/Select/Select';
import { ButtonGroupStyled, ButtonStyled } from '../../../components/Button';
import { LabelBottom } from '../../../components/Label';
import { FOCUS_HOURS, FOCUS_MINUTES_SECONDS } from '../../../utils/constants';
import { FocusEditingStyled } from './styles';

const FocusEditing = () => {
  const [focus, setFocus] = useState<TimerType>({
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
      dispatch(setCurrentTimer({ ...focus }));
      dispatch(startFocus());
    }
  };

  return (
    <FocusEditingStyled>
      <h2 className="focus-display">
        {focus.hours}:{focus.minutes.padStart(2, '0')}:
        {focus.seconds.padStart(2, '0')}
      </h2>

      <div className="edit-container">
        <LabelBottom htmlFor="hours" label="hours">
          <Select
            options={FOCUS_HOURS}
            id="hours"
            name="hours"
            title="set hours"
            onChange={onChange}
            value={focus.hours}
          />
        </LabelBottom>
        <LabelBottom htmlFor="minutes" label="min">
          <Select
            options={FOCUS_MINUTES_SECONDS}
            id="minutes"
            name="minutes"
            title="set minutes"
            value={focus.minutes}
            onChange={onChange}
          />
        </LabelBottom>
        <LabelBottom htmlFor="seconds" label="sec">
          <Select
            options={FOCUS_MINUTES_SECONDS}
            id="seconds"
            name="seconds"
            title="set seconds"
            value={focus.seconds}
            onChange={onChange}
          />
        </LabelBottom>
      </div>

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
  );
};
export default FocusEditing;
