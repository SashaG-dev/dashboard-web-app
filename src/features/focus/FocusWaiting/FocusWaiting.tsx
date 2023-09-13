import { BsPlusLg } from 'react-icons/bs';
import { ButtonStyled } from '../../../components/Button';
// import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
// import { savedFocus } from '../../../data/focusSaved';
import { FocusWaitingStyled } from './styles';

const FocusWaiting = () => {
  // const { saved } = useAppSelector((state) => state.focus);

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
        <p className="text-light">You have no saved timers.</p>

        <ButtonStyled
          className="session-button"
          $type="secondary"
          title="Create a new session"
          aria-label="create a new session"
        >
          <BsPlusLg aria-hidden="true" />
          Create New Session
        </ButtonStyled>
      </div>
    </FocusWaitingStyled>
  );
};
export default FocusWaiting;
