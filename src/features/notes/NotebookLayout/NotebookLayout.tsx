import { BsFillPlusCircleFill } from 'react-icons/bs';
import { toggleAddNote } from '../../../store/slices/notesSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import Header from '../../../components/Header/Header';
import NotesContainer from '../NotesContainer/NotesContainer';
import { ButtonStyled } from '../../../components/Button';
import { formatDate } from '../../../utils/helpers';
import { NotebookLayoutStyled } from './styles';

const NotebookLayout = () => {
  const { addNote, currentNote } = useAppSelector((state) => state.notes);

  const dispatch = useAppDispatch();

  const currentDate = () => formatDate(new Date(), 'medium');

  return (
    <NotebookLayoutStyled>
      <Header heading="Notebook" name="notebook" />
      <NotesContainer addNote={addNote} />
      <ButtonStyled
        className={`notebook-add ${addNote ? 'rotate' : ''}`}
        title={addNote ? 'Cancel' : 'Add new note'}
        aria-label={addNote ? 'cancel' : 'add new note'}
        $type="iconLarge"
        onClick={() => dispatch(toggleAddNote({}))}
        disabled={currentDate() === currentNote?.date}
      >
        <BsFillPlusCircleFill aria-hidden="true" />
      </ButtonStyled>
    </NotebookLayoutStyled>
  );
};
export default NotebookLayout;
