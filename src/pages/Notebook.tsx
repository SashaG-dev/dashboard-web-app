import { useEffect } from 'react';
import NotebookLayout from '../features/notes/NotebookLayout/NotebookLayout';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchRecentNotes } from '../store/slices/notesSlice';

const Notebook = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchRecentNotes());
  }, []);

  return <main>{isLoading ? <h1>Loading...</h1> : <NotebookLayout />}</main>;
};
export default Notebook;
