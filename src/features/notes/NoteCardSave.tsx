import { BsPencilFill } from 'react-icons/bs';
import { getNoteContext } from '../../context/noteContext';
import { ButtonStyled } from '../../components/Button';
import { NoteCardProps } from './NoteCard/NoteCard';

const NoteCardSave = (props: NoteCardProps) => {
  const { main, heading } = getNoteContext().state;

  return (
    <>
      <div className="note-headings">
        <h2 className="note-heading">{heading}</h2>
        <ButtonStyled
          title="Edit note"
          aria-label="edit note"
          $type="iconSmall"
          onClick={() => props.setIsEditing(true)}
        >
          <BsPencilFill aria-hidden="true" />
        </ButtonStyled>
      </div>

      <div className="note-main">
        <p className="text-light">{main}</p>
      </div>
    </>
  );
};
export default NoteCardSave;
