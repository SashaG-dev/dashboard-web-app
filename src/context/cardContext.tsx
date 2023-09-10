import { createContext, ReactElement } from 'react';

export type CardStateType = {
  week: any;
};

export const initialState: CardStateType = {
  week: [],
};

const useCardsContext = (initialState: CardStateType) => {
  return { state: initialState };
};

type CardsContextType = ReturnType<typeof useCardsContext>;

const initialContextState: CardsContextType = {
  state: initialState,
};

export const CardsContext =
  createContext<CardsContextType>(initialContextState);

type PropsType = {
  children?: ReactElement | undefined;
};

export const CardsContextProvider = ({
  children,
  ...initialState
}: PropsType & CardStateType): ReactElement => {
  return (
    <CardsContext.Provider value={useCardsContext(initialState)}>
      {children}
    </CardsContext.Provider>
  );
};
