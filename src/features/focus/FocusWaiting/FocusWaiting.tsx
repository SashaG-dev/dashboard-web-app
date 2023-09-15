import { MouseEvent, KeyboardEvent } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import SavedSession from '../SavedSession/SavedSession';
import { ButtonStyled } from '../../../components/Button';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { editFocus, startFocus, setCurrentTimer } from '../focusSlice';
import { savedFocus } from '../../../data/focusSaved';
import { FocusWaitingStyled } from './styles';

const FocusWaiting = () => {
  const { currentTimer } = useAppSelector((state) => state.focus);

  const dispatch = useAppDispatch();

  const handleClick = (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
    hours: string,
    minutes: string,
    seconds: string,
    name: string
  ) => {
    const { key } = e as KeyboardEvent;
    const { type } = e as MouseEvent;
    if (key === 'Enter' || type === 'click') {
      dispatch(setCurrentTimer({ hours, minutes, seconds, name }));
    }
  };

  return (
    <FocusWaitingStyled>
      <div className="focus-fact">
        <h2>Did you know?</h2>
        <p className="text-light">
          Not only does meditation help with anxiety and stress, it also
          improves concentration and memory.
        </p>
      </div>

      <div className="saved-sessions">
        <h2 className="sessions-heading">Your saved sessions</h2>

        <div className="sessions-list" role="listbox">
          {savedFocus.length ? (
            savedFocus.map((saved) => {
              const { name, hours, minutes, seconds, id } = saved;
              return (
                <SavedSession
                  key={id}
                  {...saved}
                  onClick={(e) => handleClick(e, hours, minutes, seconds, name)}
                />
              );
            })
          ) : (
            <p className="text-light">You have no saved timers.</p>
          )}
        </div>

        <ButtonStyled
          className="session-button"
          $type="secondary"
          title="Create a new session"
          onClick={() => dispatch(editFocus())}
        >
          <BsPlusLg aria-hidden="true" />
          Create New Session
        </ButtonStyled>

        {currentTimer.name !== '' && (
          <ButtonStyled
            $type="accent"
            title="Start timer"
            onClick={() => dispatch(startFocus())}
          >
            Start now
          </ButtonStyled>
        )}
      </div>
    </FocusWaitingStyled>
  );
};
export default FocusWaiting;
