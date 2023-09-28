import AccountSettings from '../AccountSettings';
import UserSettings from '../UserSettings';
import { SettingsLayoutStyled } from './styles';

const SettingsLayout = () => {
  return (
    <SettingsLayoutStyled>
      <AccountSettings />
      <UserSettings />
    </SettingsLayoutStyled>
  );
};
export default SettingsLayout;
