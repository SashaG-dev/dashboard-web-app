import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { Task } from '../types/TaskListType';

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
  task: Task | null,
  complete: boolean = false,
  title: string = 'All tasks'
) => {
  try {
    if (date && task) {
      await setDoc(
        tasksRef,
        {
          [date]: {
            date: date,
            title: title,
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
            title: title,
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