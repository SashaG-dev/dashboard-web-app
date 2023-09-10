import { useEffect, useState } from 'react';
import { CardsContextProvider } from '../context/cardContext';
import TasksLayout from '../features/tasks/TasksLayout/TasksLayout';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchWeek } from '../features/tasks/tasksSlice';

const Tasks = () => {
  const [userWeek, setUserWeek] = useState<any>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const weekData = dispatch(fetchWeek());
    setUserWeek(weekData);
  }, [dispatch]);

  const { week, isLoading } = useAppSelector((state) => state.tasks);

  return (
    <main>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CardsContextProvider week={week}>
          <TasksLayout />
        </CardsContextProvider>
      )}
    </main>
  );
};
export default Tasks;
