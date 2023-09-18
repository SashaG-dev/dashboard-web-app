import { createSlice } from '@reduxjs/toolkit';

type MenuInitialState = {
  isOpen: boolean;
  isDark: boolean;
};

const initialState: MenuInitialState = {
  isOpen: true,
  isDark: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;