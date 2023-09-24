import { BsXLg, BsCheck2 } from 'react-icons/bs';
import { getNoteContext } from '../../context/noteContext';
import { TextInputStyled } from '../../components/Input';
import { TextareaStyled } from '../../components/Textarea';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';
import { NoteCardProps } from './NoteCard/NoteCard';

const NoteCardEdit = (props: NoteCardProps) => {
  const { heading, main } = getNoteContext().state;

  return (
    <>
      <div className="note-headings">
        <TextInputStyled value={heading} />
        <ButtonGroupStyled>
          <ButtonStyled
            title="Save changes"
            aria-label="save changes"
            $type="iconSmall"
          >
            <BsCheck2 aria-hidden="true" />
          </ButtonStyled>
          <ButtonStyled
            title="Cancel"
            aria-label="cancel"
            $type="iconSmall"
            onClick={() => props.setIsEditing(false)}
          >
            <BsXLg aria-hidden="true" />
          </ButtonStyled>
        </ButtonGroupStyled>
      </div>

      <div className="note-main">
        <TextareaStyled value={main} />
      </div>
    </>
  );
};
export default NoteCardEdit;
