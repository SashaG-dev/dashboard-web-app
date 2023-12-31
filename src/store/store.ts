import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import tasksReducer from './slices/tasksSlice';
import focusReducer from './slices/focusSlice';
import notesReducer from './slices/notesSlice';
import statsReducer from './slices/statsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tasks: tasksReducer,
    focus: focusReducer,
    notes: notesReducer,
    stats: statsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
