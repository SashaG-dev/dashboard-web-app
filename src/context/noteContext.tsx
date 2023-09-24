import { createContext, useContext, useReducer, ReactElement } from 'react';
import { NoteType } from '../types/NoteType';

type NoteStateType = NoteType;

const initialState: NoteStateType = {
  date: '',
  id: '',
  heading: '',
  main: '',
};

type ReducerActionType = {
  type: 'SET_NOTE';
  payload?: {
    data: string;
  };
};

const reducer = (state: NoteStateType, action: ReducerActionType) => {
  return state;
};

const useNoteContext = (initialState: NoteStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state };
};

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
