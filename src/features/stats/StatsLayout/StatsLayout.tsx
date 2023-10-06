import Header from '../../../components/Header/Header';
import FocusTotal from '../FocusTotal';
import NotesTotal from '../NotesTotal';
import TasksTotal from '../TasksTotal';
import { StatsLayoutStyled } from './styles';

const StatsLayout = () => {
  return (
    <StatsLayoutStyled>
      <Header heading="More" name="more" />
      <div className="stats-container">
        <FocusTotal />
        <NotesTotal />
        <TasksTotal />
      </div>
    </StatsLayoutStyled>
  );
};
export default StatsLayout;
