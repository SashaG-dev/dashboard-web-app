import { MouseEvent, KeyboardEvent, useState } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { ButtonStyled } from '../../../components/Button';
import Modal from '../../../components/Modal/Modal';
import { useAppSelector } from '../../../hooks/hooks';
import { SavedFocusType } from '../../../types/SavedFocusType';
import { focusModal } from '../../../hooks/focusModal';
import { SavedSessionStyled } from './styles';

type SavedSessionType = {
  onClick: (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
  deleteSession: (id: string) => void;
};

const SavedSession = (props: SavedFocusType & SavedSessionType) => {
  const { onClick, deleteSession } = props;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const {
    currentTimer: { name },
  } = useAppSelector((state) => state.focus);

  const handleDelete = () => {
    deleteSession(props.id);
    setToggleModal(false);
  };

  const { modalRef } = focusModal({
    toggleModal,
    setToggleModal,
    onClick: () => handleDelete(),
  });

  return (
    <div className="session">
      {toggleModal && (
        <Modal
          role="alertdialog"
          heading="Are you sure you want to delete this focus session?"
          btnText="Delete"
          onClick={() => handleDelete()}
          close={() => setToggleModal(false)}
          ref={modalRef}
        />
      )}
      <SavedSessionStyled
        tabIndex={0}
        className={`saved-session ${name === props.name ? 'selected' : ''}`}
        aria-label="choose this study session"
        title="Choose this study session"
        role="option"
        aria-selected={name === props.name}
        onClick={onClick}
        onKeyDown={onClick}
      >
        <span>{props.name}</span>
        <span className="saved-time text-light">
          {props.hours !== '0' ? `${props.hours}:` : ''}
          {props.minutes}:{props.seconds}
        </span>
      </SavedSessionStyled>

      <ButtonStyled
        title="Delete session"
        aria-label={`delete ${name} from saved sessions`}
        $type="iconSmall"
        onClick={() => setToggleModal(true)}
      >
        <BsFillTrash3Fill aria-hidden="true" />
      </ButtonStyled>
    </div>
  );
};
export default SavedSession;
