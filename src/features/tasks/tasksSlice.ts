import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDoc } from 'firebase/firestore';
import { TaskListType } from '../../types/TaskListType';
import { tasksRef, updateTasks } from '../../api/apiTasks';
import { getWeek } from './taskUtilities';

type TasksInitialState = {
  week: TaskListType[] | [];
  isLoading: boolean;
};

const initialState: TasksInitialState = {
  week: [],
  isLoading: true,
};

export const fetchWeek = createAsyncThunk(
  'tasks/fetchWeek',
  async (_, { dispatch }) => {
    try {
      const tasksSnap = await getDoc(tasksRef);
      const data = tasksSnap.data();
      const userWeek = await getWeek(data!);
      dispatch(tasksSlice.actions.setWeek(userWeek));
      return data;
    } catch (err) {
      console.error(err);
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
    addTask: (state, action) => {
      const date = action.payload.date;
      const newTask = action.payload.task;
      const updatedWeek = state.week.map((listItem: TaskListType) => {
        return listItem?.date === date
          ? { ...listItem, tasks: [...listItem.tasks, newTask] }
          : listItem;
      });
      updateTasks(date, newTask);
      state.week = updatedWeek;
    },
    toggleTask: () => {},
    completeTaskList: (state, action) => {
      const date = action.payload.date;
      const boolean = action.payload.boolean;
      const updatedWeek = state.week.map((listItem) => {
        return listItem.date === date
          ? { ...listItem, complete: !listItem.complete }
          : listItem;
      });
      updateTasks(date, null, boolean);
      state.week = updatedWeek;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeek.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addTask, toggleTask, completeTaskList } = tasksSlice.actions;

export default tasksSlice.reducer;
