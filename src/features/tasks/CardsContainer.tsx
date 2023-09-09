import { useCardsContextHook } from '../../context/cardContext';
import TaskListCard from './TaskListCard/TaskListCard';

const CardsContainer = () => {
  const { state } = useCardsContextHook();

  const renderTaskCards = () => {
    return state.week.map((day, i) => {
      return (
        <TaskListCard key={day?.date} index={i} data={day!} date={day!.date} />
      );
    });
  };

  return <div className="cards-container">{renderTaskCards()}</div>;
};
export default CardsContainer;
