import { useEffect } from 'react';
import { fetchUserData, unsubscribe } from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/hooks';
import SettingsLayout from '../features/settings/SettingsLayout/SettingsLayout';

const Settings = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());

    return () => {
      dispatch(unsubscribe());
    };
  }, [dispatch]);

  return (
    <main>
      <SettingsLayout />
    </main>
  );
};
export default Settings;
