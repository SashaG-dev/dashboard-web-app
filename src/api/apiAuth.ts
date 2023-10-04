import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';
import { errorToast, successToast } from '../utils/toasts';
import { redirect } from 'react-router-dom';
import { UserType } from '../types/UserType';

export const apiAuth = getAuth();

const createUserData = async (user: User, password: string) => {
  try {
    const userRef = doc(db, 'users', user.uid);

    const details: UserType = {
      id: user.uid,
      email: user.email,
      password,
      displayName: 'user',
      photoURL: null,
      color: 'purple',
      darkMode: true,
      tag: {
        currentTag: '',
        hasTag: false,
      },
    };

    await setDoc(userRef, {
      details,
      focus: [],
      notes: [],
      statistics: {},
      tasks: [],
    });
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(
      apiAuth,
      email,
      password
    );
    const user = newUser.user as any;
    await createUserData(user, password);
    localStorage.setItem('token', user.accessToken);
    await signInWithEmailAndPassword(apiAuth, email, password);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (
      errorCode === 'auth/invalid-email' ||
      errorCode === 'auth/missing-password'
    )
      errorToast('Please enter a valid email and password.');
    if (errorCode === 'auth/email-already-in-use')
      errorToast("There's already an account associated with this email.");
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(apiAuth, email, password);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (
      errorCode === 'auth/invalid-email' ||
      errorCode === 'auth/missing-password'
    )
      errorToast('Please enter your email and password before logging in.');
    if (errorCode === 'auth/wrong-password') errorToast('Incorrect password.');
    if (errorCode === 'auth/user-not-found')
      errorToast('No user found. Try creating a new account.');
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

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(apiAuth, email);
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserAccount = async () => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      await deleteDoc(doc(db, 'users', user.uid));
      await deleteUser(user);
      successToast('Account deleted.');
    }
  } catch (err: any) {
    console.error(err);
    errorToast('Could not delete account.');
  }
};
