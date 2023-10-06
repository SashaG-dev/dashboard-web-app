import { BsPencilSquare } from 'react-icons/bs';
import { useAppSelector } from '../../hooks/hooks';

const NotesTotal = () => {
  const { totalNotesTaken } = useAppSelector((state) => state.stats.statistics);

  return (
    <div className="stat">
      <div className="stat-icon">
        <BsPencilSquare aria-hidden="true" />
      </div>
      <div className="stat-text">
        <h2 className="stat-total" aria-labelledby="stat-notes">
          {totalNotesTaken}
        </h2>
        <p className="stat-type" id="stat-notes">
          notes taken
        </p>
      </div>
    </div>
  );
};
export default NotesTotal;
