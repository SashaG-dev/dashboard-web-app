import { useState } from 'react';
import { BsPause, BsPlay } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { toggleFocus, waitFocus } from '../../../store/slices/focusSlice';
import Modal from '../../../components/Modal/Modal';
import { focusModal } from '../../../hooks/focusModal';
import { ButtonStyled, ButtonGroupStyled } from '../../../components/Button';
import { FocusingStyled } from './styles';

const Focusing = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const { currentTimer, isPaused, timeLeft } = useAppSelector(
    (state) => state.focus
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (timeLeft === '0:00') {
      dispatch(waitFocus());
    } else {
      setToggleModal(true);
    }
  };

  const onClick = () => dispatch(waitFocus());
  const close = () => setToggleModal(false);

  const { modalRef } = focusModal({ toggleModal, setToggleModal, onClick });

  const renderButton = () => {
    if (isPaused) {
      return (
        <>
          <BsPlay aria-hidden="true" />
          Play
        </>
      );
    }
    return (
      <>
        <BsPause aria-hidden="true" />
        Pause
      </>
    );
  };

  return (
    <FocusingStyled>
      {toggleModal && (
        <Modal
          role="alert"
          heading="Are you sure you want to finish this session now?"
          btnText="End session"
          onClick={onClick}
          close={close}
          ref={modalRef}
        />
      )}
      <h2 className="focus-name text-light">
        {currentTimer.name || 'Unnamed Session'}
      </h2>

      <p className="time">{timeLeft}</p>

      <ButtonGroupStyled className="btn-group">
        <ButtonStyled
          $type="secondary"
          title={isPaused ? 'Continue session' : 'Pause session'}
          className={isPaused ? 'play' : 'pause'}
          onClick={() =>
            dispatch(toggleFocus({ boolean: isPaused ? false : true }))
          }
          disabled={timeLeft === '0:00'}
        >
          {renderButton()}
        </ButtonStyled>
        <ButtonStyled
          $type="accent"
          onClick={handleClick}
          title="Finish this session"
        >
          Done
        </ButtonStyled>
      </ButtonGroupStyled>
    </FocusingStyled>
  );
};
export default Focusing;
