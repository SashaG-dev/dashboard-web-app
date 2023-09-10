import { useAppSelector } from '../../hooks/hooks';
import TaskListCard from './TaskListCard/TaskListCard';
import { TaskListType } from '../../types/TaskListType';

const CardsContainer = () => {
  const data = useAppSelector((state) => state.tasks);

  const renderTaskCards = () => {
    return data.week.map((day: TaskListType, i: number) => {
      return (
        <TaskListCard key={day?.date} index={i} data={day!} date={day?.date} />
      );
    });
  };

  return <div className="cards-container">{renderTaskCards()}</div>;
};
export default CardsContainer;
