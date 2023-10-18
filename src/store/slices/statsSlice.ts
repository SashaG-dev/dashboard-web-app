import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot, doc } from 'firebase/firestore';
import { Unsubscribe, onAuthStateChanged } from 'firebase/auth';
import { UserStatsType } from '../../types/UserStatsType';
import { apiAuth } from '../../api/apiAuth';
import { db } from '../../api/firebase';
import { RootState } from '../store';
import { unsubscribeFn } from '../../utils/helpers';
import {
  addFocusHours,
  addNotesTotal,
  addTasksComplete,
} from '../../api/apiStats';

type StatsStateType = {
  statistics: UserStatsType;
  unsubscribe: Unsubscribe | null;
};

const initialState: StatsStateType = {
  statistics: {
    totalFocusTime: 0,
    totalTasksComplete: 0,
    totalTaskItems: 0,
    totalNotesTaken: 0,
  },
  unsubscribe: null,
};

export const fetchUserStats = createAsyncThunk(
  'stats/fetchUserStats',
  async (_, { getState, dispatch }) => {
    try {
      onAuthStateChanged(apiAuth, (user) => {
        if (user !== null) {
          const ref = doc(db, 'users', user.uid);
          const unsubscribe = onSnapshot(ref, (doc) => {
            const data = doc.data();
            if (data) {
              dispatch(statsSlice.actions.setStats(data.statistics));
            }
            if (!user) {
              (getState() as RootState).stats.unsubscribe = unsubscribe;
            }
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = unsubscribeFn('stats/unsubscribe', 'stats');

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.statistics = action.payload;
    },
    addTotalFocus: (state, action) => {
      const { time } = action.payload;
      const newTime = state.statistics.totalFocusTime + time;
      addFocusHours(newTime);
    },
    toggleTotalNotes: (state, action) => {
      const { method } = action.payload;
      let newTotal;
      if (method === 'add') newTotal = state.statistics.totalNotesTaken + 1;
      else newTotal = state.statistics.totalNotesTaken - 1;
      addNotesTotal(newTotal);
    },
    addTotalTasks: (state, action) => {
      const { itemsTotal } = action.payload;
      const newTotal = state.statistics.totalTasksComplete + 1;
      const newItemsTotal = state.statistics.totalTaskItems + itemsTotal;
      addTasksComplete(newTotal, newItemsTotal);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(unsubscribe.fulfilled, (state) => {
      state.unsubscribe = null;
    });
  },
});

export const { addTotalFocus, toggleTotalNotes, addTotalTasks } =
  statsSlice.actions;

export default statsSlice.reducer;
