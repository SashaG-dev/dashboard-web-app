import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot, Unsubscribe } from 'firebase/firestore';
import { focusRef } from '../../api/apiFocus';
import { SavedFocusType } from '../../types/SavedFocusType';
import { RootState } from '../store';

export type TimerType = Omit<SavedFocusType, 'id'>;

type FocusStateType = {
  saved: SavedFocusType[] | [];
  status: 'waiting' | 'editing' | 'focusing';
  currentTimer: TimerType;
  isPaused: boolean;
  isLoading: boolean;
  unsubscribe: null | Unsubscribe;
};

const initialState: FocusStateType = {
  saved: [],
  status: 'waiting',
  currentTimer: {
    hours: '0',
    minutes: '0',
    seconds: '0',
    name: '',
  },
  isPaused: false,
  isLoading: true,
  unsubscribe: null,
};

export const fetchFocusData = createAsyncThunk(
  'focus/fetchFocusData',
  async (_, { getState, dispatch }) => {
    try {
      const unsubscribe = onSnapshot(focusRef, async (doc) => {
        const data = doc.data();
        if (data) {
          dispatch(focusSlice.actions.setSavedFocus(data?.saved));
        }
        // (getState() as RootState).focus.unsubscribe = unsubscribe;
      });
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = createAsyncThunk(
  'focusSlice/unsubscribe',
  (_, { getState }) => {
    const { unsubscribe } = (getState() as RootState).focus;

    if (unsubscribe) {
      unsubscribe();
    }
  }
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
      state.isPaused = false;
    },
    editFocus: (state) => {
      state.status = 'editing';
    },
    startFocus: (state) => {
      state.status = 'focusing';
    },
    toggleFocus: (state) => {
      state.isPaused = !state.isPaused;
    },
    setCurrentTimer: (state, action) => {
      state.currentTimer = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFocusData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFocusData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(unsubscribe.fulfilled, (state) => {
        state.unsubscribe = null;
      });
  },
});

export const {
  waitFocus,
  editFocus,
  startFocus,
  toggleFocus,
  setCurrentTimer,
} = focusSlice.actions;

export default focusSlice.reducer;
