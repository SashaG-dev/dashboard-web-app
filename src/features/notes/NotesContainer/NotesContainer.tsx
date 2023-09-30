import NoteCard from '../NoteCard/NoteCard';
import { useAppSelector } from '../../../hooks/hooks';
import { NotesContainerStyled } from './styles';

const NotesContainer = ({ addNote }: { addNote: boolean }) => {
  const { recentNotes } = useAppSelector((state) => state.notes);

  const displayNotes = () => {
    if (recentNotes.length !== 0) {
      return recentNotes.map((note) => <NoteCard key={note.id} {...note} />);
    } else
      return addNote ? '' : <h2 className="text-light">No notes saved.</h2>;
  };

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
      {displayNotes()}
    </NotesContainerStyled>
  );
};
export default NotesContainer;
