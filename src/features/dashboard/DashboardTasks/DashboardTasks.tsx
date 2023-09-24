import { useEffect, KeyboardEvent } from 'react';
import Card from '../../../components/Card/Card';
import { DashboardTasksStyled } from './styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchWeek, unsubscribe } from '../../../store/slices/tasksSlice';

const DashboardTasks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dashboardTasksLinks = document.querySelectorAll('.card a');

    const toggleHover = (e: KeyboardEvent<HTMLAnchorElement>) => {
      const article = (e.target as HTMLAnchorElement).closest('article')!;
      if (document.activeElement === e.target) {
        article.ariaCurrent = 'true';
        article.classList.add('focus');
      } else {
        article.ariaCurrent = 'false';
        article.classList.remove('focus');
      }
    };

    dashboardTasksLinks.forEach((link) => {
      link.addEventListener('focus', (e: any) => toggleHover(e));
      link.addEventListener('blur', (e: any) => toggleHover(e));
    });

    return () => {
      dashboardTasksLinks.forEach((link) => {
        link.removeEventListener('focus', (e: any) => toggleHover(e));
        link.removeEventListener('blur', (e: any) => toggleHover(e));
      });
    };
  });

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
