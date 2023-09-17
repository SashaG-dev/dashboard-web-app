import { useState } from 'react';
import { BsPause, BsPlay } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { toggleFocus, finishFocus } from '../focusSlice';
import Modal from '../../../components/Modal/Modal';
import { focusModal } from '../../../hooks/focusModal';
import { ButtonStyled, ButtonGroupStyled } from '../../../components/Button';
import { countdown } from '../focusUtilities';
import { FocusingStyled } from './styles';

const Focusing = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const {
    currentTimer: { name, hours, minutes, seconds },
    isPaused,
  } = useAppSelector((state) => state.focus);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (time === '0:00') {
      dispatch(finishFocus());
    } else {
      setToggleModal(true);
    }
  };

  const onClick = () => dispatch(finishFocus());

  const close = () => setToggleModal(false);

  const time = countdown({ hours, minutes, seconds });

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
