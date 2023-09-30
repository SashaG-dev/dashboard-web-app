import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { createSession, updateSaved } from '../../api/apiFocus';
import { SavedFocusType } from '../../types/SavedFocusType';
import { RootState } from '../store';
import { apiAuth } from '../../api/apiAuth';
import { db } from '../../api/firebase';

export type TimerType = Omit<SavedFocusType, 'id'>;

type FocusStateType = {
  saved: SavedFocusType[] | [];
  status: 'waiting' | 'editing' | 'focusing';
  currentTimer: TimerType;
  isPaused: boolean;
  isLoading: boolean;
  timeLeft: string;
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
  timeLeft: '',
  unsubscribe: null,
};

export const fetchFocusData = createAsyncThunk(
  'focus/fetchFocusData',
  async (_, { getState, dispatch }) => {
    try {
      onAuthStateChanged(apiAuth, (user) => {
        if (user !== null) {
          const ref = doc(db, 'users', user.uid);
          const unsubscribe = onSnapshot(ref, async (doc) => {
            const data = doc.data();
            if (data) {
              dispatch(focusSlice.actions.setSavedFocus(data.focus));
            }
            // (getState() as RootState).focus.unsubscribe = unsubscribe;
          });
        }
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
      state.currentTimer.name = '';
      state.isPaused = false;
    },
    editFocus: (state) => {
      state.status = 'editing';
    },
    startFocus: (state) => {
      state.status = 'focusing';
    },
    toggleFocus: (state, action) => {
      const boolean = action.payload.boolean;
      state.isPaused = boolean;
    },
    setCurrentTimer: (state, action) => {
      state.currentTimer = { ...action.payload };
    },
    setTimeLeft: (state, action) => {
      const timeLeft = action.payload.timeLeft;
      state.timeLeft = timeLeft;
    },
    addNewFocus: (_, action) => {
      const newSession = action.payload.data;
      createSession(newSession);
    },
    updateSavedFocus: (_, action) => {
      const newSaved = action.payload.newSaved;
      updateSaved(newSaved);
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
  setTimeLeft,
  addNewFocus,
  updateSavedFocus,
} = focusSlice.actions;

export default focusSlice.reducer;
