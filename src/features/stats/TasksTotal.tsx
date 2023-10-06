import { BsCalendarHeart } from 'react-icons/bs';
import { useAppSelector } from '../../hooks/hooks';

const TasksTotal = () => {
  const { totalTasksComplete } = useAppSelector(
    (state) => state.stats.statistics
  );

  return (
    <div className="stat">
      <div className="stat-icon">
        <BsCalendarHeart aria-hidden="true" />
      </div>
      <div className="stat-text">
        <h2 className="stat-total" aria-labelledby="stat-tasks">
          {totalTasksComplete}
        </h2>
        <p className="stat-type" id="stat-tasks">
          tasks complete
        </p>
      </div>
    </div>
  );
};
export default TasksTotal;
