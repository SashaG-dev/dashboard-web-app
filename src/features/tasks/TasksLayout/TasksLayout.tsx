import CardsContainer from '../CardsContainer';
import { getFullWeek } from '../../../utils/helpers';
import { TasksLayoutStyled } from './styles';

const TasksLayout = () => {
  return (
    <TasksLayoutStyled>
      <div className="tasks-layout--headings">
        <h1 className="tasks-heading">This Week's Tasks</h1>
        <p>{getFullWeek()}</p>
      </div>
      <CardsContainer />
    </TasksLayoutStyled>
  );
};
export default TasksLayout;
