import { BsPause, BsPlay } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { toggleFocus } from '../focusSlice';
import { ButtonStyled, ButtonGroupStyled } from '../../../components/Button';
import { countdown } from '../focusUtilities';
import { FocusingStyled } from './styles';

const Focusing = () => {
  const {
    currentTimer: { name, hours, minutes, seconds },
    isPaused,
  } = useAppSelector((state) => state.focus);

  const dispatch = useAppDispatch();

  const time = countdown({ hours, minutes, seconds });

  return (
    <FocusingStyled>
      <h2 className="focus-name text-light">{name || 'Unnamed Session'}</h2>

      <p className="time">{time}</p>

      <ButtonGroupStyled className="btn-group">
        <ButtonStyled
          $type="secondary"
          title={isPaused ? 'Continue session' : 'Pause session'}
          className={isPaused ? 'play' : 'pause'}
          onClick={() => dispatch(toggleFocus())}
          disabled={time === '0:00'}
        >
          {isPaused ? (
            <>
              <BsPlay aria-hidden="true" />
              Play
            </>
          ) : (
            <>
              <BsPause aria-hidden="true" />
              Pause
            </>
          )}
        </ButtonStyled>
        <ButtonStyled $type="accent">Done</ButtonStyled>
      </ButtonGroupStyled>
    </FocusingStyled>
  );
};
export default Focusing;
