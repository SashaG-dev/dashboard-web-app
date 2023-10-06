import { NavLink } from 'react-router-dom';
import {
  BsHouseDoor,
  BsCalendarHeart,
  BsBarChartLine,
  BsGear,
  BsPencilSquare,
  BsLightningCharge,
} from 'react-icons/bs';
import { UserMenuNavStyled } from './styles';

const UserMenuNav = () => {
  return (
    <UserMenuNavStyled>
      <ul className="links">
        <li>
          <NavLink to="/" title="Go to homepage">
            <BsHouseDoor role="img" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="my-tasks" title="Go to tasks">
            <BsCalendarHeart role="img" />
            <span>My Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="notebook" title="Go to notebook">
            <BsPencilSquare role="img" />
            <span>Notebook</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="focus" title="Enter focus mode">
            <BsLightningCharge role="img" />
            <span>Focus</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="more" title="Go to more features">
            <BsBarChartLine role="img" />
            <span>More</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" title="Go to settings">
            <BsGear role="img" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </UserMenuNavStyled>
  );
};
export default UserMenuNav;
