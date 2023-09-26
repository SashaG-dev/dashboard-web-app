import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot, Unsubscribe } from 'firebase/firestore';
import { NoteType } from '../../types/NoteType';
import { notesRef, updateNote, deleteNote } from '../../api/apiNotes';
import { RootState } from '../store';

type NotesInitialState = {
  recentNotes: [] | NoteType[];
  isLoading: boolean;
  currentNote: NoteType;
  hasCurrent: boolean;
  addNote: boolean;
  unsubscribe: null | Unsubscribe | void;
};

const initialState: NotesInitialState = {
  recentNotes: [],
  isLoading: true,
  currentNote: { id: '', heading: '', main: '', date: '' },
  hasCurrent: false,
  addNote: false,
  unsubscribe: null,
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
      // (getState() as RootState).notes.unsubscribe = unsubscribe;
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = createAsyncThunk(
  'notesSlice/unsubscribe',
  (_, { getState }) => {
    const { unsubscribe } = (getState() as RootState).focus;

    if (unsubscribe) {
      unsubscribe();
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
      state.currentNote = notes[0];
    },
    toggleAddNote: (state, action) => {
      const { toggle } = action?.payload;
      if (toggle === 'false') state.addNote = false;
      else if (toggle === 'true') state.addNote = true;
      else state.addNote = !state.addNote;
    },
    deleteUserNote: (_, action) => {
      const { date } = action.payload;
      deleteNote(date);
    },
    updateUserNote: (_, action) => {
      const { data } = action.payload;
      updateNote(data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecentNotes.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(unsubscribe.fulfilled, (state) => {
        state.unsubscribe = null;
      });
  },
});

export const { updateUserNote, toggleAddNote, deleteUserNote } =
  notesSlice.actions;

export default notesSlice.reducer;
