import NoteCard from '../NoteCard/NoteCard';
import { NotesContainerStyled } from './styles';
import { useAppSelector } from '../../../hooks/hooks';

const NotesContainer = () => {
  const { recentNotes } = useAppSelector((state) => state.notes);

  return (
    <NotesContainerStyled>
      {recentNotes.map((note) => {
        return <NoteCard key={note.id} {...note} />;
      })}
    </NotesContainerStyled>
  );
};
export default NotesContainer;
