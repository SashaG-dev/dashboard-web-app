import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { SavedFocusType } from '../types/SavedFocusType';
import { successToast, errorToast } from '../utils/toasts';

export const focusRef = doc(db, 'account-1', 'focus');

export const createSession = async (data: SavedFocusType) => {
  try {
    const newSession = {
      id: data.id,
      name: data.name || 'Unnamed Session',
      hours: data.hours,
      minutes: data.minutes.padStart(2, '0'),
      seconds: data.seconds.padStart(2, '0'),
    };

    await setDoc(focusRef, { saved: arrayUnion(newSession) }, { merge: true });
    successToast('New focus session saved!');
  } catch (err) {
    console.error(err);
    errorToast('Session could not be saved.');
  }
};

export const updateSaved = async (data: SavedFocusType[]) => {
  try {
    await setDoc(focusRef, { saved: data });
    successToast('Session deleted.');
  } catch (err) {
    console.error(err);
    errorToast('Could not delete session.');
  }
};
