import CardsContainer from '../CardsContainer';
import { CardsContextProvider } from '../../../context/cardContext';
import { getDate } from '../../../utils/helpers';
import { TasksLayoutStyled } from './styles';
import { initialState } from '../../../context/cardContext';

const TasksLayout = () => {
  return (
    <TasksLayoutStyled>
      <div className="tasks-layout--headings">
        <h1 className="tasks-heading">This Week's Tasks</h1>
        <p>{getDate()}</p>
      </div>

      <CardsContextProvider week={initialState.week}>
        <CardsContainer />
      </CardsContextProvider>
    </TasksLayoutStyled>
  );
};
export default TasksLayout;
