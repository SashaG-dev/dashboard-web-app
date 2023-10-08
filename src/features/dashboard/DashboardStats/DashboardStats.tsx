import {
  BsCalendarHeart,
  BsPencilSquare,
  BsLightningCharge,
} from 'react-icons/bs';
import { useAppSelector } from '../../../hooks/hooks';
import { displayTotalHours } from '../../stats/statsUtilities';
import { DashboardStatsStyled } from './styles';

const DashboardStats = () => {
  const { totalFocusTime, totalNotesTaken, totalTaskItems } = useAppSelector(
    (state) => state.stats.statistics
  );

  return (
    <DashboardStatsStyled>
      <h2 className="stats-heading">Some Stats</h2>
      <div className="stats-container">
        <div className="stat-card">
          <BsCalendarHeart aria-hidden="true" />
          <div className="stat-text">
            <h3>{totalTaskItems}</h3>
            <p>tasks finished</p>
          </div>
        </div>
        <div className="stat-card">
          <BsPencilSquare aria-hidden="true" />
          <div className="stat-text">
            <h3>{totalNotesTaken}</h3>
            <p>notes taken</p>
          </div>
        </div>
        <div className="stat-card">
          <BsLightningCharge aria-hidden="true" />
          <div className="stat-text">
            <h3>{displayTotalHours(totalFocusTime)}</h3>
            <p>hours focused</p>
          </div>
        </div>
      </div>
    </DashboardStatsStyled>
  );
};
export default DashboardStats;
