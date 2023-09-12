import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { TaskType } from '../types/TaskListType';

export const tasksRef = doc(db, 'account-1', 'tasks');

export const getTasks = async () => {
  try {
    const tasksSnap = await getDoc(tasksRef);
    const data = tasksSnap.data();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateTasks = async (
  date: string,
  task: TaskType | null,
  complete: boolean = false
) => {
  try {
    if (date && task) {
      await setDoc(
        tasksRef,
        {
          [date]: {
            date: date,
            complete: complete,
            tasks: arrayUnion(task),
          },
        },
        { merge: true }
      );
    }

    if (!task) {
      await setDoc(
        tasksRef,
        {
          [date]: {
            date: date,
            complete: complete,
          },
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateTaskList = async (
  date: string,
  updatedTaskItems: TaskType[] | null
) => {
  try {
    if (updatedTaskItems !== null) {
      await setDoc(
        tasksRef,
        {
          [date]: {
            tasks: updatedTaskItems,
          },
        },
        { merge: true }
      );
    }
  } catch (err) {
    console.error(err);
  }
};
