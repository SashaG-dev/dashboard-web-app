import CardsContainer from '../CardsContainer';
import { getFullWeek } from '../../../utils/helpers';
import Header from '../../../components/Header/Header';
import { TasksLayoutStyled } from './styles';

const TasksLayout = () => {
  return (
    <TasksLayoutStyled>
      <div className="tasks-layout--headings">
        <Header heading="This Week's Tasks" name="tasks" displayTime={false}>
          <p>{getFullWeek()}</p>
        </Header>
      </div>
      <CardsContainer />
    </TasksLayoutStyled>
  );
};
export default TasksLayout;
