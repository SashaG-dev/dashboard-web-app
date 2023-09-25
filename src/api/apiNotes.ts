import { doc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { db } from './firebase';
import { NoteType } from '../types/NoteType';

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
  } catch (err) {
    console.error(err);
  }
};

export const deleteNote = async (date: string) => {
  try {
    await updateDoc(notesRef, { [date]: deleteField() });
  } catch (err) {
    console.error(err);
  }
};
