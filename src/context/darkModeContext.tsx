import { createContext, useContext, ReactElement } from 'react';

type DarkModeStateType = {
  darkMode: boolean;
};

const initialState: DarkModeStateType = {
  darkMode: true,
};

const useModeContext = (initialState: DarkModeStateType) => ({
  state: initialState,
});

type UseDarkModeContext = ReturnType<typeof useModeContext>;

const initialContextState: UseDarkModeContext = {
  state: initialState,
};

const DarkModeContext = createContext<UseDarkModeContext>(initialContextState);

type Props = {
  children?: ReactElement;
};

export const DarkModeProvider = ({
  children,
  ...initialState
}: Props & DarkModeStateType) => {
  return (
    <DarkModeContext.Provider value={useModeContext(initialState)}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const getModeContext = () => useContext(DarkModeContext);
