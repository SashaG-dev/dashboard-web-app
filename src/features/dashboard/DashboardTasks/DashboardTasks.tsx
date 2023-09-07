import Card from '../../../components/Card/Card';
import { DashboardTasksStyled } from './styles';
import { allTasks } from '../../../data/tasks';

const DashboardTasks = () => {
  const displayedTasks = allTasks.slice(0, 2);

  return (
    <DashboardTasksStyled>
      <h2 className="tasks-heading">Here's Your Tasks</h2>
      <div className="tasks-container">
        {displayedTasks.map((task, i) => {
          return (
            <Card
              key={`${task.date}`}
              date={task.date}
              title={task.title}
              current={i === 0}
              tasks={[task.tasks[0].main, task?.tasks[1]?.main]}
            />
          );
        })}
      </div>
    </DashboardTasksStyled>
  );
};
export default DashboardTasks;
