import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { NoteType } from '../../types/NoteType';
import { db } from '../../api/firebase';
import { updateNote, deleteNote } from '../../api/apiNotes';
import { apiAuth } from '../../api/apiAuth';
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
      onAuthStateChanged(apiAuth, (user) => {
        if (user !== null) {
          const ref = doc(db, 'users', user.uid);
          const unsubscribe = onSnapshot(ref, (doc) => {
            const data = doc.data();
            if (data) {
              dispatch(notesSlice.actions.setRecentNotes(data.notes));
            }
            if (!user) {
              (getState() as RootState).notes.unsubscribe = unsubscribe;
            }
          });
        }
      });
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
      const notes = action.payload as NoteType[];
      state.recentNotes = notes.slice(0, 5);
      state.currentNote = notes[0];
    },
    toggleAddNote: (state, action) => {
      const { toggle } = action?.payload;
      if (toggle === 'false') state.addNote = false;
      else if (toggle === 'true') state.addNote = true;
      else state.addNote = !state.addNote;
    },
    deleteUserNote: (state, action) => {
      const { date } = action.payload;
      const newNotesArr = state.recentNotes.filter(
        (note) => note.date !== date
      );
      deleteNote(newNotesArr);
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
