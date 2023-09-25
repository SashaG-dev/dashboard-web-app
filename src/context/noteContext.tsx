import { createContext, useContext, ReactElement } from 'react';
import { NoteType } from '../types/NoteType';

type NoteStateType = NoteType;

const initialState: NoteStateType = {
  date: '',
  id: '',
  heading: '',
  main: '',
};

const useNoteContext = (initialState: NoteStateType) => ({
  state: initialState,
});

type UseNoteContextType = ReturnType<typeof useNoteContext>;

const initialContextState: UseNoteContextType = {
  state: initialState,
};

const NoteContext = createContext<UseNoteContextType>(initialContextState);

type Props = {
  children?: ReactElement;
};

export const NoteProvider = ({
  children,
  ...initialState
}: Props & NoteStateType) => {
  return (
    <NoteContext.Provider value={useNoteContext(initialState)}>
      {children}
    </NoteContext.Provider>
  );
};

export const getNoteContext = () => useContext(NoteContext);
