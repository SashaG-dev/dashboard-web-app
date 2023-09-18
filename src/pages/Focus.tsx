import { useEffect } from 'react';
import FocusLayout from '../features/focus/FocusLayout/FocusLayout';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchFocusData, unsubscribe } from '../store/slices/focusSlice';

const Focus = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.focus);

  useEffect(() => {
    dispatch(fetchFocusData());

    return () => {
      dispatch(unsubscribe());
    };
  }, [dispatch]);

  return <main>{isLoading ? <h1>Loading...</h1> : <FocusLayout />}</main>;
};
export default Focus;
