import CardsContainer from '../CardsContainer';
import { getDate } from '../../../utils/helpers';
import { TasksLayoutStyled } from './styles';

const TasksLayout = () => {
  return (
    <TasksLayoutStyled>
      <div className="tasks-layout--headings">
        <h1 className="tasks-heading">This Week's Tasks</h1>
        <p>{getDate()}</p>
      </div>
      <CardsContainer />
    </TasksLayoutStyled>
  );
};
export default TasksLayout;
