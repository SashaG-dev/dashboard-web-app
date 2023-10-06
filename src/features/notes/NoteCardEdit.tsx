import { useState, useEffect, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { BsXLg, BsCheck2, BsFillTrash3Fill } from 'react-icons/bs';
import { getNoteContext } from '../../context/noteContext';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import * as notesSlice from '../../store/slices/notesSlice';
import { toggleTotalNotes } from '../../store/slices/statsSlice';
import { formatDate } from '../../utils/helpers';
import Modal from '../../components/Modal/Modal';
import { TextInputStyled } from '../../components/Input';
import { TextareaStyled } from '../../components/Textarea';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';
import { NoteCardProps } from './NoteCard/NoteCard';
import { NoteType } from '../../types/NoteType';
import { errorToast } from '../../utils/toasts';
import { MAX_NOTE_TITLE_LENGTH, MAX_NOTE_LENGTH } from '../../utils/constants';
import { focusModal } from '../../hooks/focusModal';

const NoteCardEdit = (props: NoteCardProps) => {
  const { heading, main, date } = getNoteContext().state;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [userNote, setUserNote] = useState<NoteType>({
    id: `${new Date().getTime()}`,
    date: formatDate(new Date(), 'medium'),
    heading,
    main,
  });

  const { addNote } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUserNote((prev) => {
      return { ...prev, id: `${new Date().getTime()}` };
    });
  }, [userNote.main]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!userNote.heading.trim() || !userNote.main.trim()) {
      errorToast('Please enter some text before saving.');
    } else if (userNote.heading === heading && userNote.main === main) {
      props.setIsEditing(false);
    } else if (userNote.heading.length > MAX_NOTE_TITLE_LENGTH)
      errorToast('Please enter a shorter note title!');
    else if (userNote.main.length > MAX_NOTE_LENGTH)
      errorToast('Please enter a shorter note!');
    else {
      dispatch(notesSlice.updateUserNote({ data: userNote }));
      props.setIsEditing(false);
      if (addNote) {
        dispatch(notesSlice.toggleAddNote({ toggle: 'false' }));
        dispatch(toggleTotalNotes({ method: 'add' }));
      }
    }
  };

  const headingSmallClasses = () => {
    return `heading-small ${
      userNote.heading.length > MAX_NOTE_TITLE_LENGTH ? 'red' : ''
    }`;
  };

  const mainSmallClasses = () => {
    return `main-small ${userNote.main.length > MAX_NOTE_LENGTH ? 'red' : ''}`;
  };

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleModal(true);
  };

  const onClick = () => {
    dispatch(notesSlice.deleteUserNote({ date }));
    dispatch(toggleTotalNotes({ method: 'remove' }));
  };
  const close = () => setToggleModal(false);

  const { modalRef } = focusModal({ toggleModal, setToggleModal, onClick });

  return (
    <>
      {toggleModal && (
        <Modal
          role="alertdialog"
          btnText="Delete"
          heading="Are you sure you want to delete this note?"
          onClick={onClick}
          close={close}
          ref={modalRef}
        />
      )}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="note-headings">
          <TextInputStyled
            value={userNote.heading}
            name="heading"
            onChange={(e) => handleChange(e)}
          />
          <small className={headingSmallClasses()}>
            {MAX_NOTE_TITLE_LENGTH - userNote.heading.length}
          </small>
          <ButtonGroupStyled>
            <ButtonStyled
              title="Save changes"
              aria-label="save changes"
              $type="iconSmall"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              <BsCheck2 aria-hidden="true" />
            </ButtonStyled>
            <ButtonStyled
              title="Cancel"
              aria-label="cancel"
              $type="iconSmall"
              type="button"
              onClick={() => props.setIsEditing(false)}
            >
              <BsXLg aria-hidden="true" />
            </ButtonStyled>
          </ButtonGroupStyled>
        </div>

        <div className="note-main">
          <TextareaStyled
            value={userNote.main}
            name="main"
            onChange={(e) => handleChange(e)}
          />

          <div className="note-more">
            {addNote || (
              <ButtonStyled
                title="Delete note"
                aria-label="delete note"
                $type="iconSmall"
                onClick={(e) => handleToggle(e)}
              >
                <BsFillTrash3Fill aria-hidden="true" />
              </ButtonStyled>
            )}
            <small className={mainSmallClasses()}>
              {userNote.main.length}/{MAX_NOTE_LENGTH}
            </small>
          </div>
        </div>
      </form>
    </>
  );
};
export default NoteCardEdit;
