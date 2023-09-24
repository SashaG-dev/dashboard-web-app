import NoteCard from '../NoteCard/NoteCard';
import { useAppSelector } from '../../../hooks/hooks';
import { NotesContainerStyled } from './styles';

const NotesContainer = ({ addNote }: { addNote: boolean }) => {
  const { recentNotes } = useAppSelector((state) => state.notes);

  return (
    <NotesContainerStyled>
      {addNote && (
        <NoteCard
          id=""
          date=""
          heading="New note"
          main="Start editing and enter your text here"
        />
      )}
      {recentNotes.map((note) => {
        return <NoteCard key={note.id} {...note} />;
      })}
    </NotesContainerStyled>
  );
};
export default NotesContainer;
