import { useEffect } from 'react';
import FocusLayout from '../features/focus/FocusLayout/FocusLayout';
import { useAppDispatch } from '../hooks/hooks';
import { fetchFocusData, unsubscribe } from '../store/slices/focusSlice';

const Focus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFocusData());

    return () => {
      dispatch(unsubscribe());
    };
  }, [dispatch]);

  return (
    <main>
      <FocusLayout />
    </main>
  );
};
export default Focus;
