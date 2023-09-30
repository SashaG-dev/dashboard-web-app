import { doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { NoteType } from '../types/NoteType';
import { apiAuth } from './apiAuth';
import { errorToast, successToast } from '../utils/toasts';

export const updateNote = async (data: NoteType) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      const newNote = {
        id: data.id,
        date: data.date,
        heading: data.heading,
        main: data.main,
      };
      await setDoc(
        ref,
        {
          notes: arrayUnion(newNote),
        },

        { merge: true }
      );
      successToast('Note saved!');
    }
  } catch (err) {
    console.error(err);
    errorToast('Note could not be saved.');
  }
};

export const deleteNote = async (data: NoteType[]) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await updateDoc(ref, { notes: data });
      successToast('Your note was deleted.');
    }
  } catch (err) {
    console.error(err);
    errorToast('Could not delete note.');
  }
};
