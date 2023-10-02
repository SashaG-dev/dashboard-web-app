import { setDoc, doc } from 'firebase/firestore';
import { updateProfile, updatePassword } from 'firebase/auth';
import { db } from './firebase';
import { apiAuth } from './apiAuth';
import { errorToast, successToast } from '../utils/toasts';

export const toggleMode = async (darkMode: boolean) => {
  try {
    const user = apiAuth.currentUser;
    const ref = doc(db, 'users', user!.uid);
    await setDoc(
      ref,
      {
        details: {
          darkMode: darkMode,
        },
      },
      { merge: true }
    );
  } catch (err) {
    console.error(err);
    errorToast('Could not update user settings.');
  }
};

export const updateTheme = async (color: string) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(
        ref,
        {
          details: {
            color: color,
          },
        },
        { merge: true }
      );
    }
    successToast('Theme updated!');
  } catch (err) {
    console.error(err);
    errorToast('Could not update user theme.');
  }
};

export const updateName = async (newName: string) => {
  try {
    const user = apiAuth.currentUser;
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await updateProfile(user, { displayName: newName });
      await setDoc(
        ref,
        {
          details: {
            displayName: newName,
          },
        },
        { merge: true }
      );
      successToast('Name successfully updated!');
    }
  } catch (err) {
    console.error(err);
    errorToast('Could not update name.');
  }
};

export const updateUserPassword = async (newPassword: string) => {
  try {
    const user = apiAuth.currentUser;
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await updatePassword(user, newPassword);
      await setDoc(
        ref,
        {
          details: {
            password: newPassword,
          },
        },
        { merge: true }
      );
      successToast('Password successfully updated!');
    }
  } catch (err: any) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.error(err);
    if (errorCode === 'auth/requires-recent-login')
      errorToast(
        'Session outdated! Please log out and log back in to update password.'
      );
    else errorToast('Could not update password.');
  }
};
