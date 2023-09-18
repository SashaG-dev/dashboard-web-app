import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { SavedFocusType } from '../types/SavedFocusType';

export const focusRef = doc(db, 'account-1', 'focus');

export const createSession = async (data: SavedFocusType) => {
  await setDoc(
    focusRef,
    {
      saved: {
        id: data.id,
        name: data.name || 'Unnamed Session',
        hours: data.hours,
        minutes: data.minutes,
        seconds: data.seconds,
      },
    },
    { merge: true }
  );
};
