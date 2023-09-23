import { BsPencilFill } from 'react-icons/bs';
import { ButtonStyled } from '../../../components/Button';
import { NoteCardStyled } from './styles';

type NoteCardProps = {
  heading: string;
  main: string;
  id: string;
};

const NoteCard = (props: NoteCardProps) => {
  return (
    <NoteCardStyled>
      <div className="note-headings">
        <h2 className="note-heading">{props.heading}</h2>
        <ButtonStyled
          title="Edit note"
          aria-label="edit note"
          $type="iconSmall"
        >
          <BsPencilFill aria-hidden="true" />
        </ButtonStyled>
      </div>

      <div className="note-main">
        <p className="text-light">{props.main}</p>
      </div>
    </NoteCardStyled>
  );
};
export default NoteCard;
