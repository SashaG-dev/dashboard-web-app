import { useEffect } from 'react';
import Card from '../../../components/Card/Card';
import { DashboardTasksStyled } from './styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchWeek, unsubscribe } from '../../tasks/tasksSlice';

const DashboardTasks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeek());

    return () => {
      unsubscribe();
    };
  }, []);

  const { week } = useAppSelector((state) => state.tasks);

  return (
    <DashboardTasksStyled>
      <h2 className="tasks-heading">Here's Your Tasks</h2>
      <div className="tasks-container">
        {week.slice(0, 2).map((task, i) => {
          return (
            <Card
              key={`${task.date}`}
              date={task.date}
              title={task.title}
              current={i === 0}
              tasks={[task?.tasks[0]?.main, task?.tasks[1]?.main]}
            />
          );
        })}
      </div>
    </DashboardTasksStyled>
  );
};
export default DashboardTasks;
