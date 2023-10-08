import Header from '../../../components/Header/Header';
import Stat from '../Stat';
import { useAppSelector } from '../../../hooks/hooks';
import {
  displayTotalDays,
  displayTotalHours,
  displayTotalMinutes,
} from '../statsUtilities';
import { StatsLayoutStyled } from './styles';

const StatsLayout = () => {
  const {
    totalFocusTime,
    totalNotesTaken,
    totalTaskItems,
    totalTasksComplete,
  } = useAppSelector((state) => state.stats.statistics);

  return (
    <StatsLayoutStyled>
      <Header heading="Stats" name="stats" />
      <div className="stats-container">
        <Stat icon="notes" stat={totalNotesTaken} type="notes taken" />
        <Stat
          icon="tasks"
          stat={totalTasksComplete}
          type="task lists finished"
        />
        <Stat icon="items" stat={totalTaskItems} type="tasks completed" />
        <Stat
          icon="days"
          stat={displayTotalDays(totalFocusTime)}
          type="days focused"
        />
        <Stat
          icon="hours"
          stat={displayTotalHours(totalFocusTime)}
          type="hours focused"
        />
        <Stat
          icon="minutes"
          stat={displayTotalMinutes(totalFocusTime)}
          type="minutes focused"
        />
      </div>
    </StatsLayoutStyled>
  );
};
export default StatsLayout;
