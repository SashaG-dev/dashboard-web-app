import { createSlice } from '@reduxjs/toolkit';

type MenuInitialState = {
  isOpen: boolean;
};

const initialState: MenuInitialState = {
  isOpen: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state, action?) => {
      const { booleanStr } = action.payload;
      if (booleanStr) state.isOpen = false;
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
