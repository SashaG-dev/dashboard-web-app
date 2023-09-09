import { CardStateType } from './cardContext';
import { Task } from '../types/TaskListType';

type ReducerAction = {
  type: 'ADD_TASK' | 'REMOVE_TASK';
  payload?: {
    date: string;
    task: Task;
  };
};

const reducer = (state: CardStateType, action: ReducerAction) => {
  if (action.type === 'ADD_TASK') {
    const date = action.payload!.date;
    const newTask = action!.payload!.task;
    const updatedWeek = state.week.map((listItem) => {
      return listItem?.date === date
        ? { ...listItem, tasks: [...listItem!.tasks, newTask] }
        : listItem;
    });
    return { ...state, week: updatedWeek };
  }

  return state;
};

export default reducer;
