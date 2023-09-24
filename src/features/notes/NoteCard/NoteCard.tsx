import { useState, Dispatch, SetStateAction } from 'react';
import { NoteType } from '../../../types/NoteType';
import { NoteProvider } from '../../../context/noteContext';
import NoteCardSave from '../NoteCardSave';
import NoteCardEdit from '../NoteCardEdit';
import { NoteCardStyled } from './styles';

export type NoteCardProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

const NoteCard = (props: NoteType) => {
  const { id, date, heading, main } = props;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const data = { id, date, heading, main };

  return (
    <NoteProvider {...data}>
      <NoteCardStyled>
        {isEditing ? (
          <NoteCardEdit {...props} setIsEditing={setIsEditing} />
        ) : (
          <NoteCardSave {...props} setIsEditing={setIsEditing} />
        )}
      </NoteCardStyled>
    </NoteProvider>
  );
};
export default NoteCard;
