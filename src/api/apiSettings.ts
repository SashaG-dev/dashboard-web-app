import { setDoc } from 'firebase/firestore';
import { userRef } from './apiAuth';
import { errorToast, successToast } from '../utils/toasts';

export const toggleMode = (darkMode: boolean) => {
  try {
    setDoc(
      userRef,
      {
        darkMode: darkMode,
      },
      { merge: true }
    );
  } catch (err) {
    console.error(err);
    errorToast('Could not update user settings.');
  }
};

export const updateName = (newName: string) => {
  try {
    setDoc(
      userRef,
      {
        displayedName: newName,
      },
      { merge: true }
    );
    successToast('Name updated!');
  } catch (err) {
    console.error(err);
    errorToast('Could not update name.');
  }
};
