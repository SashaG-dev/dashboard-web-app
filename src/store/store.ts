import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import tasksReducer from './slices/tasksSlice';
import focusReducer from './slices/focusSlice';
import notesReducer from './slices/notesSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tasks: tasksReducer,
    focus: focusReducer,
    notes: notesReducer,
  },
});

//exporting types so they'll update when slices/state is updated
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
