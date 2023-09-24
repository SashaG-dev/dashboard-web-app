import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Header from '../../../components/Header/Header';
import NotesContainer from '../NotesContainer/NotesContainer';
import { ButtonStyled } from '../../../components/Button';
import { NotebookLayoutStyled } from './styles';

const NotebookLayout = () => {
  const [addNote, setAddNote] = useState<boolean>(false);

  return (
    <NotebookLayoutStyled>
      <Header heading="Notebook" name="notebook" />
      <NotesContainer addNote={addNote} />
      <ButtonStyled
        className={`notebook-add ${addNote ? 'rotate' : ''}`}
        title={addNote ? 'Cancel' : 'Add new note'}
        aria-label={addNote ? 'cancel' : 'add new note'}
        $type="iconLarge"
        onClick={() => setAddNote((prev) => !prev)}
      >
        <BsFillPlusCircleFill aria-hidden="true" />
      </ButtonStyled>
    </NotebookLayoutStyled>
  );
};
export default NotebookLayout;
