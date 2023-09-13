import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SavedFocusType } from '../../types/SavedFocusType';

type FocusStateType = {
  saved: SavedFocusType[] | null;
  status: 'waiting' | 'editing' | 'focusing' | 'finishing';
};

const initialState: FocusStateType = {
  saved: null,
  status: 'waiting',
};

export const fetchFocusData = createAsyncThunk(
  'focus/fetchFocusData',
  () => {}
);

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {},
});

export default focusSlice.reducer;
