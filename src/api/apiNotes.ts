import { doc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { db } from './firebase';
import { NoteType } from '../types/NoteType';
import { errorToast, successToast } from '../utils/toasts';

export const notesRef = doc(db, 'account-1', 'notes');

export const updateNote = async (data: NoteType) => {
  try {
    await setDoc(
      notesRef,
      {
        [data.date]: {
          id: data.id,
          date: data.date,
          heading: data.heading,
          main: data.main,
        },
      },
      { merge: true }
    );
    successToast('Note saved!');
  } catch (err) {
    console.error(err);
    errorToast('Note could not be saved.');
  }
};

export const deleteNote = async (date: string) => {
  try {
    await updateDoc(notesRef, { [date]: deleteField() });
    successToast('Your note was deleted.');
  } catch (err) {
    console.error(err);
    errorToast('Could not delete note.');
  }
};
