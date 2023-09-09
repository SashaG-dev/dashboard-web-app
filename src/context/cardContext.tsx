import { createContext, useContext, ReactElement, useReducer } from 'react';
import { getWeek, WeekType } from '../features/tasks/taskUtilities';
import { Task } from '../types/TaskListType';
import cardReducer from './cardReducer';

export type CardStateType = {
  week: WeekType;
};

export const initialState: CardStateType = {
  week: getWeek(),
};

const useCardsContext = (initialState: CardStateType) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  const addTask = (date: string, task: Task) =>
    dispatch({ type: 'ADD_TASK', payload: { date: date, task } });

  return { state, addTask };
};

type CardsContextType = ReturnType<typeof useCardsContext>;

const initialContextState: CardsContextType = {
  state: initialState,
  addTask: () => {},
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

export const useCardsContextHook = () => useContext(CardsContext);
