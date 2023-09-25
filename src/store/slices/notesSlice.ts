import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { NoteType } from '../../types/NoteType';
import { notesRef, updateNote, deleteNote } from '../../api/apiNotes';

type NotesInitialState = {
  recentNotes: [] | NoteType[];
  isLoading: boolean;
  currentNote: NoteType;
  hasCurrent: boolean;
  addNote: boolean;
};

const initialState: NotesInitialState = {
  recentNotes: [],
  isLoading: true,
  currentNote: { id: '', heading: '', main: '', date: '' },
  hasCurrent: false,
  addNote: false,
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
      state.currentNote = notes[0];
    },
    toggleAddNote: (state, action) => {
      const { toggle } = action?.payload;
      if (toggle === 'false') state.addNote = false;
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
      });
  },
});

export const { updateUserNote, toggleAddNote, deleteUserNote } =
  notesSlice.actions;

export default notesSlice.reducer;
