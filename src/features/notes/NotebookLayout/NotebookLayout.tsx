import { BsFillPlusCircleFill } from 'react-icons/bs';
import Header from '../../../components/Header/Header';
import NotesContainer from '../NotesContainer/NotesContainer';
import { ButtonStyled } from '../../../components/Button';
import { NotebookLayoutStyled } from './styles';

const NotebookLayout = () => {
  return (
    <NotebookLayoutStyled>
      <Header heading="Notebook" name="notebook" />
      <NotesContainer />
      <ButtonStyled
        className="notebook-add"
        title="Add new note"
        aria-label="add new note"
        $type="iconLarge"
      >
        <BsFillPlusCircleFill aria-hidden="true" />
      </ButtonStyled>
    </NotebookLayoutStyled>
  );
};
export default NotebookLayout;
