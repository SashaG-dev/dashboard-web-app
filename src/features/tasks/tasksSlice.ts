import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { TaskListType, TaskType } from '../../types/TaskListType';
import { tasksRef, updateTasks, updateTaskList } from '../../api/apiTasks';
import { getWeek } from './taskUtilities';
import { RootState } from '../../store/store';

type TasksInitialState = {
  week: TaskListType[] | [];
  isLoading: boolean;
  unsubscribe: null | (() => void);
};

const initialState: TasksInitialState = {
  week: [],
  isLoading: true,
  unsubscribe: null,
};

export const fetchWeek = createAsyncThunk(
  'tasks/fetchWeek',
  async (_, { dispatch }) => {
    try {
      const unsubscribe = onSnapshot(tasksRef, async (doc) => {
        const data = doc.data();
        const userWeek = await getWeek(data!);
        dispatch(tasksSlice.actions.setWeek(userWeek));
      });
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = createAsyncThunk(
  'tasks/unsubscribe',
  (_, { getState }) => {
    const { unsubscribe } = (getState() as RootState).tasks;
    if (unsubscribe) {
      unsubscribe();
    }
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setWeek: (state, action) => {
      state.week = action.payload;
    },
    addTask: (_, action) => {
      const date = action.payload.date;
      const newTask = action.payload.task;
      updateTasks(date, newTask);
    },
    completeTaskList: (_, action) => {
      const date = action.payload.date;
      const boolean = action.payload.boolean;
      updateTasks(date, null, boolean);
    },
    updateList: (state, action) => {
      const date = action.payload.date;
      const taskId = action.payload.id;
      const updatedTask: string = action.payload?.main;
      const updatedStatus: string = action.payload?.newStatus;
      const updatedTaskItems = state.week
        .find((list) => list.date === date)
        ?.tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                main: updatedTask || task.main,
                status: updatedStatus || task.status,
              }
            : task
        ) as TaskType[];
      updateTaskList(date, updatedTaskItems);
    },
    deleteTaskItem: (state, action) => {
      const date = action.payload.date;
      const taskId = action.payload.id;
      const updatedTaskItems = state.week
        .find((list) => list.date === date)
        ?.tasks.filter((task) => task.id !== taskId) as TaskType[];
      updateTaskList(date, updatedTaskItems);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeek.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(unsubscribe.fulfilled, (state) => {
        state.unsubscribe = null;
      });
  },
});

export const { addTask, completeTaskList, updateList, deleteTaskItem } =
  tasksSlice.actions;

export default tasksSlice.reducer;
