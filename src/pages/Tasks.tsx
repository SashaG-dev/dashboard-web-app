import { useEffect } from 'react';
import { CardsContextProvider } from '../context/cardContext';
import TasksLayout from '../features/tasks/TasksLayout/TasksLayout';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchWeek, unsubscribe } from '../features/tasks/tasksSlice';

const Tasks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeek());

    return () => {
      dispatch(unsubscribe());
    };
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
