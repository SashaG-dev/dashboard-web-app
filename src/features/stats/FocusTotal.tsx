import { BsLightningCharge } from 'react-icons/bs';
import { useAppSelector } from '../../hooks/hooks';
import { displayTotalHours } from './statsUtilities';

const FocusTotal = () => {
  const { totalFocusTime } = useAppSelector((state) => state.stats.statistics);

  return (
    <div className="stat">
      <div className="stat-icon">
        <BsLightningCharge aria-hidden="true" />
      </div>
      <div className="stat-text">
        <h2 className="stat-total" aria-labelledby="stat-hours">
          {displayTotalHours(totalFocusTime!)}
        </h2>
        <p className="stat-type" id="stat-hours">
          hours focused
        </p>
      </div>
    </div>
  );
};
export default FocusTotal;
