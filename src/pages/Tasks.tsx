import { useEffect } from 'react';
import TasksLayout from '../features/tasks/TasksLayout/TasksLayout';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchWeek, unsubscribe } from '../store/slices/tasksSlice';

const Tasks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeek());

    return () => {
      dispatch(unsubscribe());
    };
  }, [dispatch]);

  const { isLoading } = useAppSelector((state) => state.tasks);

  return <main>{isLoading ? <h1>Loading...</h1> : <TasksLayout />}</main>;
};
export default Tasks;
