import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { TaskType } from '../types/TaskListType';
import { apiAuth } from './apiAuth';
import { errorToast, randomTaskToast } from '../utils/toasts';

export const tasksRef = doc(db, 'account-1', 'tasks');

export const updateTasks = async (
  date: string,
  task: TaskType | null,
  complete: boolean = false
) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);

      if (date && task) {
        await setDoc(
          ref,
          {
            tasks: {
              [date]: {
                date: date,
                complete: complete,
                tasks: arrayUnion(task),
              },
            },
          },
          { merge: true }
        );
      }

      if (!task) {
        await setDoc(
          ref,
          {
            tasks: {
              [date]: {
                date: date,
                complete: complete,
              },
            },
          },
          { merge: true }
        );
      }
      if (complete) randomTaskToast();
    }
  } catch (err) {
    console.error(err);
    errorToast('Your tasks could not be updated.');
  }
};

export const updateTaskList = async (
  date: string,
  updatedTaskItems: TaskType[] | null
) => {
  const user = apiAuth.currentUser;
  try {
    if (user !== null) {
      const ref = doc(db, 'users', user.uid);
      if (updatedTaskItems !== null) {
        await setDoc(
          ref,
          {
            tasks: {
              [date]: {
                tasks: updatedTaskItems,
              },
            },
          },
          { merge: true }
        );
      }
    }
  } catch (err) {
    console.error(err);
    errorToast('Your tasks could not be updated.');
  }
};
