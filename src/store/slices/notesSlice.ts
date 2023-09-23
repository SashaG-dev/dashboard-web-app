import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { NoteType } from '../../types/NoteType';
import { notesRef } from '../../api/apiNotes';

type NotesInitialState = {
  recentNotes: [] | NoteType[];
  isLoading: boolean;
};

const initialState: NotesInitialState = {
  recentNotes: [],
  isLoading: true,
};

export const fetchRecentNotes = createAsyncThunk(
  'notes/fetchRecentNotes',
  async (_, { getState, dispatch }) => {
    try {
      const unsubscribe = onSnapshot(notesRef, (doc) => {
        const data = doc.data();
        if (data) {
          dispatch(notesSlice.actions.setRecentNotes(data));
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
);

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setRecentNotes: (state, action) => {
      const notes = Object.values(action.payload).slice(0, 5) as NoteType[];
      state.recentNotes = notes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecentNotes.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default notesSlice.reducer;
