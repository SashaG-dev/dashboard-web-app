import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import tasksReducer from '../features/tasks/tasksSlice';
import focusReducer from '../features/focus/focusSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tasks: tasksReducer,
    focus: focusReducer,
  },
});

//exporting types so they'll update when slices/state is updated
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
