import { useState, useEffect, ChangeEvent } from 'react';
import { BsPlusLg, BsArrowLeft } from 'react-icons/bs';
import { useAppDispatch } from '../../../hooks/hooks';
import * as focusSlice from '../../../store/slices/focusSlice';
import FocusOptions from '../FocusOptions';
import SaveFocusModal from '../SaveFocusModal/SaveFocusModal';
import { ButtonGroupStyled, ButtonStyled } from '../../../components/Button';
import { MAX_TITLE_LENGTH } from '../../../utils/constants';
import { SavedFocusType } from '../../../types/SavedFocusType';
import { errorToast } from '../../../utils/toasts';
import { FocusEditingStyled } from './styles';

const FocusEditing = () => {
  const [focus, setFocus] = useState<SavedFocusType>({
    id: `${new Date().getTime()}`,
    hours: '0',
    minutes: '0',
    seconds: '0',
    name: 'Unnamed Session',
  });
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFocus((prev) => ({ ...prev, id: `${new Date().getTime()}` }));
  }, [focus.name]);

  const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFocus((prev) => ({ ...prev, [name]: value }));
  };

  const close = () => {
    setToggleModal(false);
    setFocus((prev) => ({ ...prev, name: 'Unnamed Session' }));
  };

  const startTimer = () => {
    const { hours, minutes, seconds } = focus;
    if (hours + minutes + seconds !== '000') {
      dispatch(focusSlice.setCurrentTimer({ ...focus }));
      dispatch(focusSlice.startFocus());
    } else errorToast('Please enter a valid time!');
  };

  const onClick = () => {
    const focusString = focus.hours + focus.minutes + focus.seconds;
    if (focus.name.length > MAX_TITLE_LENGTH)
      return errorToast('Please use a shorter name.');
    else if (focusString === '000')
      return errorToast('Saved timers must be more than 0:00');
    else {
      dispatch(focusSlice.addNewFocus({ data: focus }));
      setToggleModal(false);
      startTimer();
    }
  };

  return (
    <div>
      {toggleModal && (
        <SaveFocusModal
          close={close}
          focus={focus}
          onChange={onChange}
          onClick={onClick}
        />
      )}
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
            onClick={() => setToggleModal(true)}
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
