import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { apiAuth } from './apiAuth';

export const addFocusHours = async (time: number) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(
        ref,
        {
          statistics: {
            totalFocusTime: time,
          },
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const addNotesTotal = async (total: number) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(
        ref,
        {
          statistics: {
            totalNotesTaken: total,
          },
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const addTasksComplete = async (
  totalTasks: number,
  totalItems: number
) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      await setDoc(
        ref,
        {
          statistics: {
            totalTasksComplete: totalTasks,
            totalTaskItems: totalItems,
          },
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.error(err);
  }
};
