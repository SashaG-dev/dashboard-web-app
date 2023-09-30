import { doc } from 'firebase/firestore';
import { db } from './firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { errorToast, successToast } from '../utils/toasts';
import { redirect } from 'react-router-dom';

export const userRef = doc(db, 'account-1', 'details');
export const apiAuth = getAuth();

export const signInUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(apiAuth, email, password);
    successToast('Welcome back!');
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (
      errorCode === 'auth/invalid-email' ||
      errorCode === 'auth/missing-password'
    )
      errorToast('Please enter your email and password before logging in.');
    if (errorCode === 'auth/wrong-password') errorToast('Incorrect password.');
  }
};

export const signOutUser = async () => {
  try {
    await signOut(apiAuth);
  } catch (err) {
    console.error(err);
    errorToast('Could not log out. Check connection and try again!');
  }
};

export const requestAuth = async () => {
  const accessToken = localStorage?.getItem('token');
  if (!accessToken) {
    throw redirect('/login?message=Please log in first');
  }
  return null;
};
