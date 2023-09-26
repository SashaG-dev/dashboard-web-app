import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { ButtonStyled } from '../../../components/Button';
import * as notesSlice from '../../../store/slices/notesSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { formatDate, getToday } from '../../../utils/helpers';
import { DashboardNoteStyled } from './styles';

const DashboardNote = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const today = formatDate(getToday(), 'medium');

  useEffect(() => {
    dispatch(notesSlice.fetchRecentNotes());

    return () => {
      dispatch(notesSlice.unsubscribe());
    };
  }, []);

  const { isOpen } = useAppSelector((state) => state.menu);
  const { currentNote } = useAppSelector((state) => state.notes);

  const onClick = () => {
    if (!currentNote?.date)
      dispatch(notesSlice.toggleAddNote({ toggle: 'true' }));
    navigate('/notebook');
  };

  return (
    <DashboardNoteStyled $isOpen={isOpen}>
      <h2 className="note-heading--main">Recent Notes</h2>
      <div className="note-container">
        <div className="wrapper">
          <div className="note-headings">
            <h3 className="note-heading">
              {currentNote?.heading || 'No notes saved.'}
            </h3>
            <p className="note-date">{currentNote?.date || today}</p>
          </div>

          <p className="note-main">
            {currentNote?.main || 'Add a new note in the notebook tab.'}
          </p>
        </div>

        <ButtonStyled
          role="link"
          title={currentNote?.date ? 'Go to notebook' : 'Add new note'}
          aria-label={
            currentNote?.date ? 'go to notebook' : 'add new note in notebook'
          }
          onClick={onClick}
        >
          <BsArrowRightCircleFill aria-hidden="true" />
        </ButtonStyled>
      </div>
    </DashboardNoteStyled>
  );
};
export default DashboardNote;
