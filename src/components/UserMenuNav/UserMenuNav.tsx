import { NavLink } from 'react-router-dom';
import {
  BsHouseDoor,
  BsCalendarHeart,
  BsBarChartLine,
  BsThreeDots,
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
            <BsHouseDoor role="img" aria-label="home" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="my-plans" title="Go to my plans">
            <BsCalendarHeart role="img" aria-label="my plans" />
            <span>My Plans</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="notebook" title="Go to notebook">
            <BsPencilSquare role="img" aria-label="notebook" />
            <span>Notebook</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="focus" title="Enter focus mode">
            <BsLightningCharge role="img" aria-label="focus mode settings" />
            <span>Focus</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="stats" title="Go to statistics">
            <BsBarChartLine role="img" aria-label="statistics" />
            <span>Stats</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="more" title="Go to more features">
            <BsThreeDots role="img" aria-label="More" />
            <span>More</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" title="Go to settings">
            <BsGear role="img" aria-label="settings" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </UserMenuNavStyled>
  );
};
export default UserMenuNav;
