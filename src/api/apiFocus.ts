import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { SavedFocusType } from '../types/SavedFocusType';
import { apiAuth } from './apiAuth';
import { successToast, errorToast } from '../utils/toasts';

export const createSession = async (data: SavedFocusType) => {
  const user = apiAuth.currentUser;
  try {
    const newSession = {
      id: data.id,
      name: data.name || 'Unnamed Session',
      hours: data.hours,
      minutes: data.minutes.padStart(2, '0'),
      seconds: data.seconds.padStart(2, '0'),
    };
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(ref, { focus: arrayUnion(newSession) }, { merge: true });
      successToast('New focus session saved!');
    }
  } catch (err) {
    console.error(err);
    errorToast('Session could not be saved.');
  }
};

export const updateSaved = async (data: SavedFocusType[]) => {
  const user = apiAuth.currentUser;
  try {
    if (user) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(ref, { focus: data }, { merge: true });
      successToast('Session deleted.');
    }
  } catch (err) {
    console.error(err);
    errorToast('Could not delete session.');
  }
};
