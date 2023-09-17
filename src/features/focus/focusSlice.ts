import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SavedFocusType } from '../../types/SavedFocusType';

export type TimerType = Omit<SavedFocusType, 'id'>;

type FocusStateType = {
  saved: SavedFocusType[] | null;
  status: 'waiting' | 'editing' | 'focusing' | 'finishing';
  currentTimer: TimerType;
  isPaused: boolean;
};

const initialState: FocusStateType = {
  saved: null,
  status: 'waiting',
  currentTimer: {
    hours: '0',
    minutes: '0',
    seconds: '0',
    name: '',
  },
  isPaused: false,
};

export const fetchFocusData = createAsyncThunk(
  'focus/fetchFocusData',
  () => {}
);

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    setSavedFocus: (state, action) => {
      state.saved = action.payload;
    },
    waitFocus: (state) => {
      state.status = 'waiting';
    },
    editFocus: (state) => {
      state.status = 'editing';
    },
    startFocus: (state) => {
      state.status = 'focusing';
    },
    finishFocus: (state) => {
      state.status = 'finishing';
    },
    toggleFocus: (state) => {
      state.isPaused = !state.isPaused;
    },
    setCurrentTimer: (state, action) => {
      state.currentTimer = { ...action.payload };
    },
  },
});

export const {
  waitFocus,
  editFocus,
  startFocus,
  finishFocus,
  toggleFocus,
  setCurrentTimer,
} = focusSlice.actions;

export default focusSlice.reducer;
