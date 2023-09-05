import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

//exporting types so they'll update when slices/state is updated
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
